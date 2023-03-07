import HeroSlide from '@/components/ui/HeroSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ScrollDown from './ui/ScrollDown';

export interface HeroSlideProps {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  ctaText: string;
  slug: string;
  priority: boolean;
}
interface ScrollToNext {
  ctaText: string;
  ctaId: string;
}

interface HeroSliderDataProps {
  heroSlider: HeroSlideProps[];
  scrollToNext: ScrollToNext;
}

const HeroSection = ({ content }: any) => {

  return (
    <div className='hero-home relative'>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        loopedSlides={content?.length}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {
          content.length > 0 ?
            content?.map(
              (slide: HeroSlideProps, index: number) => (
                <SwiperSlide key={index}>
                  <HeroSlide
                    slide={slide}
                  />
                </SwiperSlide>
              ),
            ) :
            <HeroSlide
              slide={{ urlToImage: 'https://th.bing.com/th/id/R.f768c15607084a0b1e1a7802259d889d?rik=PW1FJqYdFpgi0w&riu=http%3a%2f%2fimg.photobucket.com%2falbums%2fv328%2fClayskater%2fGreetings%2fBanners%2fnews-banner3.jpg&ehk=TrZpgVN4FsukXfmwEcTN1E%2bvltVb0%2bWXUoGFHRCQQo8%3d&risl=&pid=ImgRaw&r=0' }}
            />
        }
      </Swiper>
      <ScrollDown
        id='#more-news'
        name='Explore More'
        isHidden={true}
      />
    </div>
  );
};

export default HeroSection;
