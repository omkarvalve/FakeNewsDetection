import React from 'react';
import LocaleDropdown from '@/components/ui/LocaleDropdown';
import Image from 'next/image';
import Link from 'next/link';
import {  FooterProps } from '@/interfaces';
import Instagram from '@/assets/icons/instagram.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import Wrapper from '@/components/ui/Wrapper';

const Footer = ({
  localeData,
}: FooterProps) => {
  return (
    <footer className='py-[60px]' id='footer'>
      <Wrapper>
        <div className='grid grid-cols-12 child:col-span-full'>
          <figure className='flex items-center justify-center border-t border-t-white pt-16 pb-12 tablet:justify-start'>
            <Link href='/' title='Studios'>
              <Image
                src='/favicon.ico'
                alt='Logo'
                width={100}
                height={25}
              />
            </Link>
          </figure>
          {/* Copyright text and social icons */}
          <div className='flex flex-col-reverse items-center justify-center gap-5 tablet:flex-row tablet:justify-between'>
            <p className='caption'>© 2023 FAKE NEWS DETECTION -CDAC, All rights reserved</p>
            <div className='flex items-center justify-center'>
              <LocaleDropdown localeData={localeData} />
              <div className='ml-0 flex items-center justify-center gap-6 tablet:ml-12'>
                <Link
                  href='#FIXME'
                  title='Instagram'
                  target='_blank'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white desktop:hover:opacity-60 ease-in delay-300'
                >
                  <Instagram />
                </Link>
                <Link
                  href='#FIXME'
                  title='Linkedin'
                  target='_blank'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white desktop:hover:opacity-60 ease-in delay-300'
                >
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
