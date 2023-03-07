import Link from 'next/link';
import DownArrow from '@/assets/svgs/icons/downArrow.svg';
import { scrollDownProps } from '@/interfaces/index';

const ScrollDown = ({ id, name, isHidden }: scrollDownProps) => {
  const handleNavClick = (e: any) => {
    e.preventDefault();
    const element = document.querySelector(id);
    const headerOffset = 60;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`absolute left-1/2 bottom-[25px] z-10 flex grow-0 -translate-x-1/2 ${
        isHidden ? 'mobile:hidden' : ''
        }`}
    >
      <Link
        href='#'
        title={name}
        className='mx-auto flex flex-col items-center desktop:hover:opacity-60 transition-all delay-300 ease-in'
        onClick={handleNavClick}
      >
        <DownArrow />
        <span className='caption mx-auto block py-2 uppercase'>{name}</span>
      </Link>
    </div>
  );
};

export default ScrollDown;
