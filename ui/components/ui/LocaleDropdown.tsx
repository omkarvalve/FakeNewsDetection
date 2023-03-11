import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LocaleDropdownProps, Locales } from '@/interfaces';
import Globe from '@/assets/icons/globe.svg';
import DownArrow from '@/assets/svgs/icons/down-arrow.svg';

const LocaleDropdown = ({
  headerLocale,
  localeData,
  setHamburger,
  isHeader
}: LocaleDropdownProps) => {
  const { asPath } = useRouter();
  const [activeLocale, setActiveLocale] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('English - EN');
  const outsideClickRef = useRef<any>(null);

  const handleLocaleDropDown = () => {
    setActiveLocale(!activeLocale);
  };

  const handleLocaleLink = (title: string) => {
    setActiveLocale(false);
    setLanguage(title);
    isHeader && setHamburger(false);
  };

  const handleOutsideClick = (e: any) => {
    if (
      activeLocale &&
      outsideClickRef.current &&
      !outsideClickRef.current.contains(e.target)
    ) {
      setActiveLocale(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [activeLocale]);

  return (
    <div
      className={`w-[220px] ${
        headerLocale ? headerLocale : 'relative mobile:hidden'
      }`}
    >
      <div
        className={`relative flex cursor-pointer items-center justify-between overflow-hidden py-2 px-1 before:absolute before:top-0 before:left-0 before:h-[2px] before:w-full before:bg-red before:content-[''] ${
          activeLocale
            ? 'before:visible before:opacity-100'
            : 'before:invisible before:opacity-0'
        }`}
        onClick={handleLocaleDropDown}
        ref={outsideClickRef}
      >
        <div className='flex select-none items-center justify-center gap-2.5'>
          <Globe />
          <span>{language}</span>
        </div>
        <div
          className={`transition-all duration-300 ease-in ${
            activeLocale ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <DownArrow />
        </div>
      </div>
      <ul
        className={`${
          activeLocale
            ? 'visible -translate-y-px opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        } locale-dropdown transition-all duration-300 ease-in`}
      >
        {localeData && localeData.map((locale: Locales) => (
          <li key={locale?.id}>
            <Link
              href={asPath}
              locale={locale?.lang}
              className={`${
                language === locale?.title && 'bg-locale-hover'
              } select-none py-3 px-4 text-base transition-all duration-300 ease-in`}
              onClick={() => handleLocaleLink(locale?.title)}
            >
              {locale?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocaleDropdown;
