import Wrapper from "./ui/Wrapper";
import Button from "./ui/CtaButton";
import Link  from "next/link";

const NewsList = ({ content, limit }: any) => {



    return (
        <section className='py-10' id='more-news'>
            <Wrapper>
                <h3 className='capitalize'>explore more news</h3>
                <ul className='py-10 flex flex-wrap gap-x-[5%] gap-y-10'>
                    {
                        content.map((news: any, i: number) => {
                            const { title, urlToImage, url, author, publishedAt } = news;
                            return (
                                i < limit ?
                                    <li className='min-h-[300px] relative desktop:basis-[45%] bg-grey basis-full mobile:basis-full' key={i}>
                                        <Link title={title} href={url}>
                                        <img
                                            src={`${urlToImage ? urlToImage : './news.png'}`}
                                            alt={title}
                                            className='w-full h-full object-cover object-center'
                                        />
                                        <p className='px-2 absolute top-4 body-1 font-extrabold backdrop-blur-sm hover:underline'>
                                            {title}
                                        </p>
                                        </Link>
                                        <Button buttonType='link' intent='secondary' text='Read More' linkTitle={title} ctaUrl={url} customStyling='body-3 tablet:body-2 absolute bottom-5 right-5' />
                                    </li>
                                    : null
                            )
                        })
                    }
                </ul>
            </Wrapper>
        </section>
    )
}

export default NewsList;
