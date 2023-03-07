import { useEffect, useState } from 'react';
import Link from 'next/link';
import UpArrow from '@/assets/svgs/icons/back-to-top.svg';

const ScrollUp = () => {

  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = (e: any) => {
    e.preventDefault();
    window.scroll(0, 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const height = window.innerHeight;
      window.scrollY > height ? setIsVisible(true) : setIsVisible(false);
    })
  }, [])

  return (
    <Link href='#' title='Top' className={`desktop:hover:opacity-100 opacity-60 mobile:opacity-100  ${isVisible ? 'fixed' : 'hidden'}  right-[3.8%] mobile:right-[3%] bottom-[20%] mobile:bottom-[15.7%] z-20 delay-300 ease-in`} onClick={scrollTop}
    >
      <UpArrow />
    </Link>
  )
}

export default ScrollUp;
