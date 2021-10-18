const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_KEY;
const LANGUAGE = 'pt-BR';

const requestUrl = (endpoint) => `${BASE_URL}${endpoint}&language=${LANGUAGE}&api_key=${API_KEY}`;

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
                    name: 'Originais do Netflix',
                    items: await fetchData('/discover/tv?with_network=213'),
                },
                {
                    slug: 'trending',
                    name: 'Recomendados para você',
                    items: await fetchData('/trending/movie/day?'),
                },
                {
                    slug: 'toprated',
                    name: 'Em alta',
                    items: await fetchData('/movie/top_rated?'),
                },
                {
                    slug: 'action',
                    name: 'Ação',
                    items: await fetchData('/discover/movie?with_genres=28'),
                },
                {
                    slug: 'comedy',
                    name: 'Comédia',
                    items: await fetchData('/discover/tv?with_genres=35'),
                },
                {
                    slug: 'horror',
                    name: 'Terror',
                    items: await fetchData('/discover/movie?with_genres=27'),
                },
            ]
        }
    }