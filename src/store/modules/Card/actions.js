export function getToMovies(movies) {
  return {
    type: 'GET_MOVIES',
    movies
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
    payload: {
      id,
    },
  };
}

export function getMoviesDetailsSucess(id) {
  return {
    type: 'MOVIES_DETAILS_SUCESS',
    payload: {
      id,
    },
  };
}

export function getMoviesDetailsFailure(id) {
  return {
    type: 'MOVIES_DETAILS_FAILURE',
    payload: {
      id,
    },
  };
}

export function getFavs(favs) {
  return {
    type: 'FAVS_MOVIE',
    payload: {
      favs,
    },
  };
}


