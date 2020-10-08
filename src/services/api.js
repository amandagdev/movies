import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=12dbf350eb5a0319d2d513ed7d90c337'

const getMoviesAll = async (url) => {
  const api = API_URL+url+API_KEY
  const response = await axios.get(api);
    return response
};
 
export default getMoviesAll