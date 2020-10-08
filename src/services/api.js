import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=12dbf350eb5a0319d2d513ed7d90c337&page=';
const API_POPULAR = 'popular'

const api = async (page = 1) => {
  const api = API_URL + API_POPULAR + API_KEY + page;
  const response = await axios.get(api);
  return response;
};

export default api


