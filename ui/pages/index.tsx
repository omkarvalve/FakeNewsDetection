import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { apiHandler } from '@/hooks/apiHandler';
import NewsList from '@/components/NewsList';
import Loading from "@/assets/svgs/icons/loading.svg";
import ScrollUp from '@/components/ui/ScrollUp';

const Home = () => {
  const { t } = useTranslation('common');

  const [topNews,setTopNews] = useState([]);
  const [news,setNews] = useState([]);
  const initialLimit = 4;
  const [limit,setLimit] = useState(initialLimit);
  const [domLoaded,setDomLoaded] = useState(false);

  const scrollHandler = () => {
    const footer = document.getElementById('footer');
    const height = Number(footer?.offsetHeight);
    const offset = Number(footer?.getBoundingClientRect().top)-Number(window.innerWidth > 1800 ? 900 : window.innerWidth > 1380 ? 500 : 0);

    if (height > offset) {
      setLimit(prev => prev + initialLimit);
    }

  }

  useEffect(()=>{
    apiHandler('https://newsapi.org/v2/top-headlines?country=us&apikey=8dbeab5a4d3b42ca84bbaa89ea8b3515',(data:any)=>setTopNews(data),'get','' );
    apiHandler('https://newsapi.org/v2/top-headlines?country=in&apikey=8dbeab5a4d3b42ca84bbaa89ea8b3515',(data:any)=>setNews(data),'get','');
    window.addEventListener('scroll', scrollHandler);
    setDomLoaded(true);
  },[]);


  return (
    <Layout
      headerData={t('header', { returnObjects: true })}
      footerData={t('footer', { returnObjects: true })}
      localeData={t('locales', { returnObjects: true })}
    >
        {
          domLoaded ?
          <>
          <ScrollUp />
          <HeroSection content={topNews}/>
          <NewsList content={news} limit={limit}/>
          </> 
        : <Loading className='mx-auto'/>
        }
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
