//@flow
import _ from 'lodash'

export const drawCard = (originalState: Object) => {
  const state = _.cloneDeep(originalState)
  const player = state.players[state.currentPlayer]
  let newCard = state.deck.pop()
  if (!newCard) {
    newCard = state.hiddenCard
    state.hiddenCard = undefined
  }
  player.hand.push(newCard)
  console.log('DRAW CARD', newCard)
  return state
}
