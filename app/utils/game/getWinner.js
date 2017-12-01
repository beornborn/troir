//@flow
import _ from 'lodash'

export const getWinner = (state: Object) => {
  console.log('WINNER CHECK STATE', state)
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
