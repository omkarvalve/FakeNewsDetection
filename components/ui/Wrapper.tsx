const Wrapper = ({ children, customStyling }: any) => {
  return <div className={`mx-auto w-[93%] max-w-[1310px] ${customStyling ? customStyling : ''}`}>{children}</div>;
};

export default Wrapper;
