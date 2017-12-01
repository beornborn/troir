//@flow
import _ from 'lodash'
import { put } from 'redux-saga/effects'
import { dealCards } from 'troir/app/reducers/App'

const DECK = [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8]

const DealCards = function* DealCards(): Generator<*,*,*> {
  const deck = _.shuffle(DECK)
  const hiddenCard = deck.pop()
  const openCards = deck.splice(-3, 3)

  const player_nums = []
  for (let i = 1; i <= 2; i += 1) {
    player_nums.push(i)
  }

  const players = _.reduce(player_nums, (result, num) => {
    result[num] = { // eslint-disable-line
      num,
      type: num === 1 ? 'user' : 'ai',
      hand: [deck.pop()],
      table: [],
      ring: false,
      lost: false,
      showCardsTo: [],
    }
    return result
  }, {})

  const state = {
    deck,
    hiddenCard,
    openCards,
    currentPlayer: 1,
    players,
    winner: null,
  }

  const pdata = _.reduce(players, (result, value, key) => {
    result[key] = value.hand[0] // eslint-disable-line
    return result
  }, {})
  console.log('DEAL', {openCards, hiddenCard, players: pdata})

  yield put(dealCards(state))
}

export default DealCards
