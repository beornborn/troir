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

export const getWinner = (state: Object) => {
  const players = _.values(state.players)
  const livePlayers = players.filter(x => !x.lost)

  //$FlowIgnore
  if (livePlayers.length === 1) {
    return livePlayers[0].num
  }

  if (state.deck.length === 0) {
    const maxCard = _.maxBy(livePlayers, p => p.hand[0]).hand[0]
    const maxCardPlayers = livePlayers.filter(x => x.hand[0] === maxCard)

    if (maxCardPlayers.length === 1) {
      return maxCardPlayers[0].num
    }

    const maxSumPlayers = _.maxBy(maxCardPlayers, x => _.sum(x.table))
    return maxSumPlayers[0].num
  }
}
