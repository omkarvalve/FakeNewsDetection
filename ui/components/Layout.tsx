import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/ui/SEO';
import { LayoutProps } from '@/interfaces';

const Layout = ({
  children,
  headerData,
  localeData,
}: LayoutProps) => {
  return (
    <>
      <SEO />
      <Header headerData={headerData} localeData={localeData} />
      {children}
      <Footer
        localeData={localeData}
      />
    </>
  );
};

export default Layout;
