//@flow
import _ from 'lodash'
import { put } from 'redux-saga/effects'
import { setCurrentState } from 'troir/app/reducers/App'

const DECK = [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8]

const DealCards = function* DealCards(): Generator<*,*,*> {
  const gameDeck = _.shuffle(DECK)
  const hiddenCard = gameDeck.pop()
  const openCards = gameDeck.splice(-3, 3)

  var data = [];
  var length = 5; // user defined length

  const player_nums = []
  for (let i = 1; i <= 2; i++) {
    player_nums.push(i)
  }

  const players = _.reduce(player_nums, (pl, num) => {
    pl[num] = {
      num,
      type: num === 1 ? 'user' : 'ai',
      hand: [gameDeck.pop()],
      table: [],
      ring: false,
      lost: false,
      showCardsTo: [],
    }
    return pl
  }, {})

  const initialState = {
    deck: gameDeck,
    hiddenCard: hiddenCard,
    openCards: openCards,
    currentPlayer: 1,
    players: players,
    winner: null,
  }

  yield put(setCurrentState(initialState))
}

export default DealCards
