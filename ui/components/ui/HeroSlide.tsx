import BackgroundImage from '@/components/ui/BackgroundImage';
import { HeroSlideProps } from '@/components/HeroSection';
import Button from '@/components/ui/CtaButton';

interface HeroCard {
  slide: any
}

const HeroSlide = ({ slide }: HeroCard) => {
  const { title, urlToImage, url, author, publishedAt } = slide;

  return (
    <BackgroundImage src={urlToImage} alt={title}>
      <div className='absolute top-0 h-full w-full bg-overlay-light'>
        <div className='relative mx-auto h-full w-[93%] max-w-[1640px] py-8 px-0 desktop:py-14 desktop:px-[22px]'>
          <h2
            className={`text-white mobile:text-center tablet:heading-6 desktop:heading-5 mobile:heading-6 desktop:w-5/6`}
          >
            {title}
          </h2>
          <div className='absolute left-0 bottom-[88px] w-full max-w-[296px] space-y-2 text-white tablet:right-0 tablet:left-[unset] desktop:right-16 desktop:max-w-[384px]'>
            <h5 className='body-1 border-b border-white py-1 tablet:heading-6'>
              {author}
            </h5>
            <p className='body-3 tablet:body-2'>{publishedAt}</p>
            <div>
              <Button buttonType='link' intent='secondary' text='View News' linkTitle={title} ctaUrl={url} customStyling='body-3 tablet:body-2' />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default HeroSlide;
