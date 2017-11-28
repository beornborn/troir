//@flow
import { take, select, call, put } from 'redux-saga/effects'
import { SAGA_INIT_GAME, SAGA_APPLY_MOVE } from 'troir/app/reducers/Saga'
import DealCards from 'troir/app/sagas/DealCards'
import ApplyMove from 'troir/app/sagas/ApplyMove'
import DecideMove from 'troir/app/sagas/DecideMove'
import { getCurrentState } from 'troir/app/reducers/selectors/App'
import { setCurrentState } from 'troir/app/reducers/App'
import { getWinner } from 'troir/app/utils/helpers'
import _ from 'lodash'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const PlayGame = function* PlayGame(): Generator<*,*,*> {
  yield take(SAGA_INIT_GAME)
  yield DealCards()

  let winner = undefined
  let move = {}
  while (!winner) {
    const originalState = yield select(getCurrentState)
    const state = _.cloneDeep(originalState)
    const { currentPlayer, players } = state
    const player = players[currentPlayer]
    player.hand.push(state.deck.pop())
    yield put(setCurrentState(state))
    if (player.type === 'user') {
      console.log('waiting for user move')
      const { payload } = yield take(SAGA_APPLY_MOVE)
      move = payload
    } else {
      move = yield DecideMove()
    }
    console.log('move', move)
    yield ApplyMove(move)
    winner = getWinner(state)
  }

  const originalState = yield select(getCurrentState)
  const state = _.cloneDeep(originalState)
  state.winner = winner
  yield put(setCurrentState(state))
}

export default PlayGame
