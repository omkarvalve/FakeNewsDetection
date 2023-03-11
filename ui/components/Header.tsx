import Link from 'next/link';
import Image from 'next/image';
import LocaleDropdown from '@/components/ui/LocaleDropdown';
import { useRouter } from 'next/router';
import { HeaderProps, Links } from '@/interfaces';
import { useEffect, useState } from 'react';

const Header = ({ headerData, localeData }: HeaderProps) => {
  const { pathname } = useRouter();
  const [hamburger, setHamburger] = useState<boolean>(false);

  useEffect(() => {
    if (hamburger) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [hamburger]);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  const handleNavLinkClick = () => {
    setHamburger(false);
  };

  return (
    <header className='sticky top-0 z-50 bg-black py-[18px] desktop:py-6'>
      <div className='mx-auto flex w-[93%] max-w-[1640px] flex-row items-center justify-between'>
        <h1 className='z-10 text-2xl font-bold'>
          <Link href='/' onClick={handleNavLinkClick} title='Fake News Detector'>
            <Image
              src='/favicon.ico'
              alt='Logo'
              width={50}
              height={24}
              className='mobile:w-[100px] mobile:h-8'
            />
          </Link>
        </h1>
        <div
          className='relative z-10 flex h-[23.33px] w-[23.33px] cursor-pointer items-center justify-center overflow-hidden child:absolute child:h-[3px] child:w-full child:bg-white child:transition-all child:duration-300 child:ease-in tablet:hidden'
          onClick={handleHamburger}
        >
          <span className={`top-[5px] ${hamburger && 'top-1/2 -translate-y-1/2 rotate-[45deg]'}`} />
          <span className={`${hamburger && '-translate-x-full'}`} />
          <span className={`bottom-1 ${hamburger && 'bottom-1/2 translate-y-1/2 rotate-[-45deg]'}`} />
        </div>
        <nav
          className={`fixed -top-full ${
            hamburger && 'top-[0%]'
            } left-0 z-[8] h-screen w-full bg-black transition-all duration-300 ease-in tablet:static tablet:h-auto tablet:w-auto`}
        >
          <ul className='absolute top-[108px] left-9 flex grow-0 flex-col items-start gap-8 tablet:static tablet:flex-row tablet:items-center'>
            <li className='heading-4 tablet:hidden'>
              <Link
                href='/'
                title='Home'
                className={`relative block py-2 px-1 ${
                  pathname === '/' ? 'before:w-full' : 'before:w-0'
                  } before:absolute before:bottom-0 before:right-0 before:h-0.5 before:bg-red before:transition-all before:duration-300 before:ease-in before:content-[''] hover:before:right-[unset] hover:before:left-0 hover:before:w-full`}
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            {headerData?.navLinks?.map((link: Links,i:number) => (
              <li
                key={i}
                className='heading-4 tablet:text-lg'
              >
                <Link
                  href={`/${link.slug}`}
                  title={link.title}
                  className={`relative block px-1 mobile:py-2 ${
                    pathname.slice(1) === link.slug
                      ? 'before:w-full'
                      : 'before:w-0'
                    } before:absolute before:bottom-0 before:right-0 before:h-0.5 before:bg-red before:transition-all before:duration-300 before:ease-in before:content-[''] hover:before:right-[unset] hover:before:left-0 hover:before:w-full`}
                  onClick={handleNavLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <LocaleDropdown
            headerLocale='absolute z-[8] bottom-11 left-9 tablet:hidden'
            localeData={localeData}
            setHamburger={setHamburger}
            isHeader
          />
        </nav>
        <div className='hidden'>
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
