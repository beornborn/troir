//@flow
import _ from 'lodash'
import { put, select } from 'redux-saga/effects'
import { setCurrentState } from 'troir/app/reducers/App'
import { getCurrentState } from 'troir/app/reducers/selectors/App'

const ApplyMove = function* ApplyMove(move: Object): Generator<*,*,*> {
  const { card, player: targetPlayerId, targetCard } = move
  const originalState = yield select(getCurrentState)
  const state = _.cloneDeep(originalState)
  const { currentPlayer: currentPlayerId } = state
  const player = state.players[currentPlayerId]
  const targetPlayer = state.players[targetPlayerId]

  player.ring = false
  player.showCardsTo = []
  player.table.push(card)
  player.hand = _.difference(player.hand, [card])
  if (_.isEmpty(player.hand)) {
    player.hand = [card]
  }

  switch (card) {
    case 1:
      if (targetPlayer.hand.includes(targetCard) && !targetPlayer.ring) {
        targetPlayer.lost = true
      }
      break
    case 2:
      if (!targetPlayer.ring) {
        targetPlayer.showCardsTo.push(player.num)
      }
      break
    case 3:
      if (!targetPlayer.ring) {
        let lostPlayer
        if (player.hand[0] > targetPlayer.hand[0]) {
          lostPlayer = targetPlayer
        } else if (player.hand[0] < targetPlayer.hand[0]) {
          lostPlayer = player
        }

        if (lostPlayer) {
          lostPlayer.lost = true
          lostPlayer.table.push(card)
          lostPlayer.hand = []
        }

        targetPlayer.showCardsTo.push(player.num)
      }
      break
    case 4:
      player.ring = true
      break
    case 5:
      if (!targetPlayer.ring) {
        targetPlayer.table.push(targetPlayer.hand[0])
        targetPlayer.hand = [state.deck.pop()]
      }
      break
    case 6:
      if (!targetPlayer.ring) {
        const temp = player.hand[0]
        player.hand = [targetPlayer.hand[0]]
        targetPlayer.hand = [temp]
        targetPlayer.showCardsTo.push(player.num)
      }
      break
    case 7:
      break
    case 8:
      player.lost = true
      break
  }

  console.log('lost?', card, player, targetPlayer)
  state.currentPlayer = state.currentPlayer === 1 ? 2 : 1

  yield put(setCurrentState(state))
}

export default ApplyMove
