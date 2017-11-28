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


// players = state[:players].keys
//     live_players = players.select {|p| !state[:players][p][:lost] }

//     if live_players.size == 1
//       state[:winner] = live_players.first
//     elsif state[:deck].empty?
//       convenient_data = players.reduce({}) do |res, p_num|
//         res[p_num] = state[:players][p_num][:hand].first
//         res
//       end
//       max_card = convenient_data.values.max
//       max_card_players = convenient_data.keys.select do |p_num|
//         convenient_data[p_num] == max_card
//       end

//       if max_card_players.size == 1
//         state[:winner] = max_card_players.first
//       else
//         convenient_data = max_card_players.reduce({}) do |res, p_num|
//           res[p_num] = state[:players][p_num][:table].sum
//           res
//         end
//         max_table = convenient_data.values.max
//         winner = convenient_data.keys.find do |p_num|
//           convenient_data[p_num] == max_table
//         end
//         state[:winner] = winner
//       end
//     end

//     state
