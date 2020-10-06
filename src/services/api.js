const API_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=12dbf350eb5a0319d2d513ed7d90c337'

export function MOVIES(url) {
  return {
    url: API_URL + url + API_KEY,
  }
}
