const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;
const LANGUAGE = 'pt-BR';

const requestUrl = (endpoint) => `${BASE_URL}${endpoint}?language=${LANGUAGE}&api_key=${API_KEY}`;

 const fetchData = async (endpoint) => {
    const res = await fetch(requestUrl(endpoint));
    const data = await res.json();
    return data;
}

export const Tmdb = 
    {
        movieList: async () => {
            return [
                {
                    slug: 'originals',
                    name: 'Originais Netflix',
                    items: await fetchData('/discover/tv'),
                }
            ]
        }
    }