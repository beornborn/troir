//@flow
import { take, select, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SAGA_INIT_GAME, SAGA_APPLY_MOVE } from 'troir/app/reducers/Saga'
import DealCards from 'troir/app/sagas/DealCards'
import ApplyMove from 'troir/app/sagas/ApplyMove'
import DecideMove from 'troir/app/sagas/DecideMove'
import { getCurrentState } from 'troir/app/reducers/selectors/App'
import { setWinner, drawCard } from 'troir/app/reducers/App'
import { getWinner, doDrawCard } from 'troir/app/utils/helpers'
import _ from 'lodash'

const PlayGame = function* PlayGame(): Generator<*,*,*> {
  console.log(new Array(12).join('\n'))
  yield DealCards()
  let winner
  let move = {}
  while (!winner) {
    const originalState = yield select(getCurrentState)
    const state = _.cloneDeep(originalState)
    const { currentPlayer, players } = state
    const player = players[currentPlayer]
    yield delay(1500)
    yield put(drawCard(doDrawCard(state)))
    if (player.type === 'user') {
      console.log('waiting for user move')
      const { payload } = yield take(SAGA_APPLY_MOVE)
      move = payload
    } else {
      yield delay(1500)
      move = yield DecideMove()
    }
    console.log('MOVE', move)
    yield ApplyMove(move)
    winner = getWinner(yield select(getCurrentState))
    console.log('WINNER', winner)
  }

  yield put(setWinner(winner))
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_INIT_GAME, PlayGame)
}

export default watch
