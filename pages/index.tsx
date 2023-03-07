import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { apiHandler } from '@/hooks/apiHandler';
import NewsList from '@/components/NewsList';

const Home = () => {
  const { t } = useTranslation('common');

  const [topNews,setTopNews] = useState([]);
  const [news,setNews] = useState([]);
  const initialLimit = 4;
  const [limit,setLimit] = useState(initialLimit)

  const scrollHandler = () => {
    const footer = document.getElementById('footer');
    const height = Number(footer?.offsetHeight);
    const offset = Number(footer?.getBoundingClientRect().top)-Number(window.innerWidth > 1800 ? 900 : window.innerWidth > 1380 ? 500 : 0);

    if (height > offset) {
      setLimit(prev => prev + initialLimit);
    }

  }

  useEffect(()=>{
    apiHandler('https://newsapi.org/v2/top-headlines?country=us',(data:any)=>setTopNews(data) );
    apiHandler('https://newsapi.org/v2/top-headlines?country=in',(data:any)=>setNews(data));
    window.addEventListener('scroll', scrollHandler);
  },[]);


  return (
    <Layout
      headerData={t('header', { returnObjects: true })}
      footerData={t('footer', { returnObjects: true })}
      localeData={t('locales', { returnObjects: true })}
    >
        <HeroSection content={topNews}/>
        <NewsList content={news} limit={limit}/>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});
