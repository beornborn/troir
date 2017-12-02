//@flow
import { take, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { SAGA_INIT_GAME, SAGA_APPLY_MOVE } from 'troir/app/reducers/Saga'
import { setWinnerApp, drawCardApp, dealCardsApp, applyMoveApp } from 'troir/app/reducers/App'
import { getWinner, drawCard, dealCards, aiDecideMove, applyMove } from 'troir/app/utils/game'

const PlayGame = function* PlayGame(): Generator<*,*,*> {
  console.log('\n\n\n')
  let winner, move
  let state = dealCards()
  yield put(dealCardsApp(state))

  while (!winner) {
    yield delay(1500)
    state = drawCard(state)
    yield put(drawCardApp(state))

    const player = state.players[state.currentPlayer]
    if (player.type === 'user') {
      console.log('waiting for user move...')
      const { payload } = yield take(SAGA_APPLY_MOVE)
      move = payload
    } else {
      yield delay(1500)
      move = aiDecideMove(state)
    }
    console.log('MOVE', move)
    state = applyMove(move, state)
    yield put(applyMoveApp(state))

    winner = getWinner(state)
    console.log('WINNER', winner)
  }

  yield put(setWinnerApp(winner))
}

const watch = function* watch(): Generator<*,*,*> {
  yield takeEvery(SAGA_INIT_GAME, PlayGame)
}

export default watch
