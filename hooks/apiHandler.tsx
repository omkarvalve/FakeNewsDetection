import axios from 'axios';

const axiosFetcher = axios.create({
    baseURL:'https://newsapi.org/v2'
});

export const apiHandler = (url:any,setData:any)=>{
    const apikey = '&apikey=8dbeab5a4d3b42ca84bbaa89ea8b3515';
    axiosFetcher.get(url+apikey).then((res)=>setData(res.data.articles)).catch((e)=>setData([]));
}