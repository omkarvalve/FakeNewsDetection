import { useState } from 'react';
import Plus from '@/assets/svgs/icons/plus.svg';

const LoadMore = ({ increment, limitHandler, maxLimit }: any) => {

  const [isVisible, setIsVisible] = useState<boolean>(true);


  const clickHandler = () => {
    limitHandler((prev: number) => {
      const newLimit = prev + increment;
      if (newLimit >= maxLimit - 1) {
        setIsVisible(false);
      }
      return newLimit;
    });
  }

  return (
    <button className={`py-2 px-[5%] mt-[20px] mx-auto border-[1px] border-white rounded-[32px] flex gap-[10px] items-center hover:opacity-40 ${!isVisible ? 'hidden' : ''} desktop:px-[2%]`} onClick={clickHandler}>
      Load more <Plus />
    </button>
  )
}

export default LoadMore;