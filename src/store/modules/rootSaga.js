import { all } from 'redux-saga/effects'

import card from './Card/saga'

export default function* rootSaga() {
  return yield all({
    card
  })
}