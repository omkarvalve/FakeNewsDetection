import Campaign from '@/assets/icons/campaign.svg';
import Link from 'next/link';

interface ButtonProps {
  text: string | number;
  buttonType: 'button' | 'link';
  ctaUrl?: string | object;
  customStyling?: string;
  intent: 'primary' | 'primaryInverse' | 'secondary';
  linkTitle?: string;
  onclick?: () => void;
}

const primaryCommon =
  'body-1 rounded-full border border-white py-2 px-6 transition-all duration-300 ease-in-out focus:border-white';

const customBtn = {
  variants: {
    intent: {
      primary: `${primaryCommon} text-white desktop:hover:bg-white desktop:hover:text-black`,
      primaryInverse: `${primaryCommon} text-black bg-white desktop:hover:bg-transparent desktop:hover:text-white`,
      secondary: 'group body-1 flex items-center transition-colors duration-300 ease-in-out',
    },
  },
};

const Button = ({
  text,
  intent,
  ctaUrl = '/',
  customStyling,
  buttonType,
  linkTitle,
  ...props
}: ButtonProps) => {
  return (
    <>
      {buttonType === 'button' ? (
        <button
          type='button'
          className={`${customBtn.variants.intent[intent]} ${
            customStyling ? customStyling : ''
          }`}
          {...props}
        >
          {text}
          {intent === 'secondary' && (
            <Campaign className='ml-2 transition-colors duration-300 ease-in-out child:fill-white desktop:child:group-hover:fill-red' />
          )}
        </button>
      ) : (
        <Link
          href={ctaUrl}
          title={linkTitle}
          className={`${customBtn.variants.intent[intent]} ${
            customStyling ? customStyling : ''
          }`}
        >
          {text}
          {intent === 'secondary' && (
            <Campaign className='ml-2 transition-colors duration-300 ease-in-out child:fill-white desktop:child:group-hover:fill-red' />
          )}
        </Link>
      )}
    </>
  );
};

export default Button;
