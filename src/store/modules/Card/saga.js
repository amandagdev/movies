import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { getToMoviesSucess, getToMoviesFailure, } from './actions';

function* getMovies(param) {
  const page  = param.payload.page
  try {
    const movies = yield call(api, page);
    yield put(getToMoviesSucess(movies));
  } catch (error) {
    yield put(getToMoviesFailure(error));
  }
}


export default all([
  takeLatest('GET_MOVIES', getMovies),
]);
