export function getToMovies(page, movies) {
  return {
    type: 'GET_MOVIES',
    payload: {
      page,
      movies
    }
  };
}

export function getToMoviesSucess(movies) {
  return {
    type: 'GET_MOVIES_SUCESS',
    movies
  };
}

export function getToMoviesFailure(error) {
  return {
    type: 'GET_MOVIES_FAILURE',
    error
  };
}

export function getMoviesDetails(id) {
  return {
    type: 'MOVIES_DETAILS',
      id
  };
}

export function getMoviesDetailsSucess(id) {
  return {
    type: 'MOVIES_DETAILS_SUCESS',
      id
  };
}

export function getMoviesDetailsFailure(id) {
  return {
    type: 'MOVIES_DETAILS_FAILURE',
      id
  };
}

export function getFavs(favs) {
  return {
    type: 'FAVS_MOVIE',
      favs
  };
}


