//@flow
import _ from 'lodash'

export const getAvailablePlayers = (state: Object, card: number) => {
  if ([1,2,3,6].includes(card)) {
    const players = _.values(state.players)
    return players.filter(p => p.num !== state.currentPlayer)
  } else if (card === 5) {
    return _.values(state.players)
  }

  return []
}
