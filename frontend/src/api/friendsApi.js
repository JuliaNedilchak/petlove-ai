import axios from 'axios';

const BASE_URL = 'https://petlove.b.goit.study/api';

export const getFriends = async()=>{
    const {data} = await axios.get(`${BASE_URL}/friends`);
    return data;
}