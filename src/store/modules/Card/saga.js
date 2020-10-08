import { all, takeLatest, call, put } from 'redux-saga/effects';
import  getMoviesAll from '../../../services/api';
import { getToMoviesSucess } from './actions'

function* getMovies() {
  try {
    const movies = yield call(getMoviesAll, 'popular')
    yield put(getToMoviesSucess(movies))
  }
  catch(error){
    yield put(error.data.error)
  }
}

export default all([
  takeLatest('GET_MOVIES', getMovies)
])