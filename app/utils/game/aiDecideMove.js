//@flow
import _ from 'lodash'

export const aiDecideMove = (state: GameState): Move => {
  // ---------- choose card
  const handCards = state.players[state.currentPlayer].hand
  const availableChoice = handCards.filter(c => c !== 8) // don't lose treasure
  const dragonWithTrollGaz = availableChoice.includes(7) && (availableChoice.includes(5) || availableChoice.includes(6))
  const card = dragonWithTrollGaz ? 7 : _.sample(availableChoice)

  // ---------- shoose target player
  const players = _.values(state.players).filter(x => !x.lost)
  let targetPlayer
  switch (card) {
    case 1:
    case 2:
    case 3:
    case 6:
      targetPlayer = _.sample(players.filter(x => x.num !== state.currentPlayer))
      break
    case 4:
    case 7:
      break
    case 5:
      targetPlayer = _.sample(players)
      break
  }

  // ------------- choose target card
  let targetCard = 0
  if (card === 1) {
    targetCard = _.sample([2,3,4,5,6,7,8])
  }

  return { card, targetPlayerNum: _.get(targetPlayer, 'num') || 0, targetCard }
}
