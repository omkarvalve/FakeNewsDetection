import { useRef } from "react";
import Wrapper from "./ui/Wrapper";

const NewsInputField = ({ setInput, result }: any) => {

    const inputReference: any = useRef();

    const inputHandler = (e: any) => {
        e.preventDefault();
        setInput(inputReference.current.value)
    }

    return (
        <section>
            <Wrapper>
                <h2 className='py-10'>News Detector</h2>
                <p className='heading-5 py-5'>Enter news,to check whether it is fake or real</p>
                <form method='post' action={'#fix'} className='flex flex-wrap' onSubmit={inputHandler}>
                    <textarea rows={10} placeholder='paste news here' className='w-full px-[2%] py-4 text-black placeholder:capitalize' disabled={false} ref={inputReference}></textarea>
                    <input type='submit' name='submit-btn' value='detect' className='capitalize py-4 px-[5%] my-5 border-white-900 border-[1px] rounded-md cursor-pointer desktop:hover:text-black desktop:hover:bg-white desktop:hover:border-black' />
                </form>
                <p className='PY-4'>{result ? result : null}</p>
            </Wrapper>
        </section>
    )
}

export default NewsInputField;
