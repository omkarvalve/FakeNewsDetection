import axios from 'axios';


export const apiHandler = (url: string, setData: any, method: string, input: string) => {
    const apiFetcher = (url: string) => method === 'get' ? axios.get(url) : axios.post(url, { input: input });
    apiFetcher(url).then((res) => setData(method === 'get' ? res.data.articles : res.data)).catch((e) => setData(method === 'get' ? [] : 'Sorry ,can \'t process request.'));
}
