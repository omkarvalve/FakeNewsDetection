import { useState } from 'react';
import Layout from '@/components/Layout';
import NewsInputField from '@/components/NewsInputField';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { apiHandler } from '@/hooks/apiHandler';

const FakeNewsDetection = () => {

    const { t } = useTranslation('common');
    const [result, setResult] = useState(null);

    const getResult = (data: string) => {
        // setResult(null);
        data !== '' ? apiHandler('http://localhost:5000/predict', setResult, 'post', data) : alert('Please provide some text');
    }

    return (
        <Layout
            headerData={t('header', { returnObjects: true })}
            footerData={t('footer', { returnObjects: true })}
            localeData={t('locales', { returnObjects: true })}
        >
            <NewsInputField setInput={getResult} result={result} />
        </Layout>
    )
}

export default FakeNewsDetection;

export const getStaticProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
});
