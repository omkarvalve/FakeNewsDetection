import { useRef, useState } from 'react';
import Wrapper from './ui/Wrapper';
import Loading from '@/assets/svgs/icons/loading.svg';

const NewsInputField = ({ setInput, result }: any) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const inputReference: any = useRef();
    const inputValue = inputReference.current;

    const inputHandler = (e: any) => {
        e.preventDefault();
        inputValue.value !== '' ? setIsEmpty(false) : setIsEmpty(true);
        setInput(inputValue.value);
    }

    const reset = () => {
        inputValue.value = '';
        setIsEmpty(true);
    }

    const changeHandler = () => {
        inputValue.value === '' ? setIsEmpty(true) : null;
    }

    return (
        <section>
            <Wrapper>
                <h2 className='py-10'>News Detector</h2>
                <p className='heading-5-small tablet:heading-5 py-5'>Enter news,to check whether it is fake or real</p>
                <form method='post' action='#FIXME' className='flex flex-wrap' onSubmit={inputHandler}>
                    <textarea name='message' rows={10} placeholder='paste news here' className='w-full px-[2%] py-4 text-black placeholder:capitalize' disabled={false} ref={inputReference} onChange={changeHandler}></textarea>
                    <input type='submit' name='submit-btn' value='detect' className='capitalize py-4 px-[5%] my-5 border-white-900 border-[1px] rounded-md cursor-pointer desktop:hover:text-black desktop:hover:bg-white desktop:hover:border-black' />
                    <input type='button' name='reset-btn' value='reset' className='capitalize py-4 ml-5  px-[5%] my-5 border-white-900 border-[1px] rounded-md cursor-pointer desktop:hover:text-black desktop:hover:bg-white desktop:hover:border-black' onClick={reset} />
                </form>
                <span className='text-white heading-5-small'>Result: </span>
                <p className={`pt-5 heading-6 ${result === 'REAL' ? ' text-[#41e30b] ' : ' text-[#f00] '}`}>
                    {result && !isEmpty ? result === 'REAL' ? 'This news is probably real.' : 'This news is probably fake ' : isEmpty ? null : <Loading className='animate-spin mx-auto' />}</p>
            </Wrapper>
        </section>
    )
}

export default NewsInputField;
