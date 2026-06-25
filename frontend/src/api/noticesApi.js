import axios from "axios";

const BASE_URL = 'https://petlove.b.goit.study/api';

export const getNotices= async (page=1, perPage=6)=>{
    const {data}= await axios.get(`${BASE_URL}/notices`, { params: {
            page,
            perPage,
        }})
        return data;
} 