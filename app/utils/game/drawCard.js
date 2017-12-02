//@flow
import _ from 'lodash'

export const drawCard = (originalState: GameState): GameState => {
  const state = _.cloneDeep(originalState)

  let newCard = state.deck.pop()
  // --------- when troll is played at the end of the game
  if (!newCard) {
    newCard = state.hiddenCard
    state.hiddenCard = undefined
  }

  const player = state.players[state.currentPlayer]
  player.hand.push(newCard)

  console.log('DRAW CARD', newCard)

  return state
}
