import axios from 'axios';

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export const fetchFromUnsplash = async (query, page=1,perpage=20) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            query: query,
            page: page,
            per_page: perpage,
        },
        headers: {Authorization: `Client-ID ${UNSPLASH_KEY}`}
    });

    return response.data;
}


export const fetchFromPEXELS = async (query,perpage=20) => {
    const response = await axios.get(`https://api.pexels.com/videos/search`, {
        params: {
            query: query,
            per_page: perpage,
        },
        headers: {Authorization: `Client-ID ${PEXELS_KEY}`}
    });

    return response.data;
}

