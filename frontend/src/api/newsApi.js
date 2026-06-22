import axios from 'axios';

const BASE_URL = 'https://petlove.b.goit.study/api';

export const getNews = async (page=1, perPage=6)=>{
    const {data} = await axios.get(`${BASE_URL}/news`, {
        params:{
            page,
            perPage,
        }
    });
    return data;
}