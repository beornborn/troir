//@flow
import _ from 'lodash'

export const applyMove = (move: Object, originalState: Object) => {
  const { card, targetPlayerNum, targetCard } = move
  const state = _.cloneDeep(originalState)
  const { currentPlayer: currentPlayerId } = state
  const player = state.players[currentPlayerId]
  const targetPlayer = state.players[targetPlayerNum]

  player.ring = false
  player.showCardsTo = []
  player.table.push(card)
  player.hand = _.difference(player.hand, [card])
  if (_.isEmpty(player.hand)) {
    player.hand = [card]
  }

  switch (card) {
    case 1:
      console.log('CASE 1', targetPlayer.hand.includes(targetCard), targetPlayer.ring)
      if (targetPlayer.hand.includes(targetCard) && !targetPlayer.ring) {
        targetPlayer.lost = true
      }
      console.log('CASE 1', targetPlayer, state)
      break
    case 2:
      if (!targetPlayer.ring) {
        targetPlayer.showCardsTo.push(player.num)
      }
      break
    case 3:
      if (!targetPlayer.ring) {
        if (player.hand[0] > targetPlayer.hand[0]) {
          targetPlayer.lost = true
        } else if (player.hand[0] < targetPlayer.hand[0]) {
          player.lost = true
        }

        targetPlayer.showCardsTo.push(player.num)
        player.showCardsTo.push(targetPlayer.num)
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
        player.showCardsTo.push(targetPlayer.num)
      }
      break
    case 7:
      break
    case 8:
      player.lost = true
      break
  }

  state.currentPlayer = state.currentPlayer === 1 ? 2 : 1

  return state
}
