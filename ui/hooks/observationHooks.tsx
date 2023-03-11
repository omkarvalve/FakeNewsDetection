import { Dispatch, SetStateAction } from 'react';

interface OptionsProps {
  root: null;
  rootMargin: string;
  threshold: number;
}

interface CheckInObserverParams {
  (
    elem: HTMLElement,
    options: OptionsProps,
    setState: Dispatch<SetStateAction<boolean>>,
    extra?: string,
  ): void;
}

interface IsInViewportParams {
  (elem: HTMLElement): boolean
}

export const checkInObserver: CheckInObserverParams = (elem, options, setState, extra) => {
  if (elem) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          if (extra) setState(false);
          return;
        }
        setState(true);

        observer.unobserve(entry.target);
      });
    }, options);

    observer.observe(elem);
  }
};

export const isInViewport: IsInViewportParams = (elem) => {
  const bounding = elem?.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const limitHandler = (minLimitDesktop: number, minLimitMobile: number, mediaMobile: boolean) => {
  return !mediaMobile ? minLimitDesktop : minLimitMobile;
}