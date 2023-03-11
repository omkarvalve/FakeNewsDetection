const BackgroundImage = ({
  children,
  src,
  alt
}: any) => {
  return (
    <div className='relative h-[calc(100vh-64px)] w-full desktop:h-[calc(100vh-76px)]'>
      <img
        src={src}
        alt={alt}
        className='w-full h-full object-cover object-center'
      />
      {children}
    </div>
  );
};

export default BackgroundImage;
