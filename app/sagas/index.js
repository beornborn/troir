//@flow
import { all, fork } from 'redux-saga/effects'
import PlayGame from 'troir/app/sagas/PlayGame'

const rootSaga = function* rootSaga(): Generator<any,any,any> {
  yield all([
    fork(PlayGame),
  ])
}

export default rootSaga
