//@flow
import { take, select, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SAGA_INIT_GAME, SAGA_APPLY_MOVE } from 'troir/app/reducers/Saga'
import { getCurrentState } from 'troir/app/reducers/selectors/App'
import { setWinnerApp, drawCardApp, dealCardsApp, applyMoveApp } from 'troir/app/reducers/App'
import { getWinner, drawCard, dealCards, aiDecideMove, applyMove } from 'troir/app/utils/game'
import _ from 'lodash'

const PlayGame = function* PlayGame(): Generator<*,*,*> {
  console.log(new Array(12).join('\n'))
  yield put(dealCardsApp(dealCards()))
  let winner
  let move = {}
  while (!winner) {
    const originalState = yield select(getCurrentState)
    let state = _.cloneDeep(originalState)
    const { currentPlayer, players } = state
    const player = players[currentPlayer]
    yield delay(1500)
    state = drawCard(state)
    yield put(drawCardApp(state))
    if (player.type === 'user') {
      console.log('waiting for user move')
      const { payload } = yield take(SAGA_APPLY_MOVE)
      move = payload
    } else {
      yield delay(1500)
      move = aiDecideMove(state)
    }
    console.log('MOVE', move)
    state = applyMove(move, state)
    yield put(applyMoveApp(state))
    winner = getWinner(yield select(getCurrentState))
    console.log('WINNER', winner)
  }

  yield put(setWinnerApp(winner))
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_INIT_GAME, PlayGame)
}

export default watch
