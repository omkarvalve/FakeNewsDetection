import { useState } from 'react';
import Layout from '@/components/Layout';
import NewsInputField from '@/components/NewsInputField';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const FakeNewsDetection = () => {

    const { t } = useTranslation('common');
    const [result, setResult] = useState(null);

    const getResult = (data: string) => {
        console.log(data);
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
