export interface LayoutProps {
  children: React.ReactNode;
  headerData: {
    navLinks: Links[];
  };
  footerData: {
  };
  localeData: Locales[];
}

export interface HeaderProps {
  headerData: {
    navLinks: Links[];
  };
  localeData: Locales[];
}

export interface FooterProps {
  localeData: Locales[];
}

export interface Links {
  id: string;
  slug: string;
  title: string;
}

export interface Locales {
  id: string;
  lang: string;
  title: string;
}

export interface LocaleDropdownProps {
  headerLocale?: string;
  localeData: Locales[];
  setHamburger?: any;
  isHeader?: boolean;
}

export interface scrollDownProps {
  id:any;
  name:string;
  isHidden:boolean;
}