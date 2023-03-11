import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  weight: ['300', '400', '600'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
