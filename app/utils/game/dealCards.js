//@flow
import _ from 'lodash'
import { logDealCards } from 'troir/app/utils/helpers'

const DECK = [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8]

export const dealCards = (): GameState => {
  const deck = _.shuffle(DECK)
  const hiddenCard = deck.pop()
  const openCards = deck.splice(-3, 3)

  const getPlayer = (num: number) => ({
    num,
    type: num === 1 ? 'user' : 'ai',
    hand: [deck.pop()],
    table: [],
    ring: false,
    lost: false,
    showCardsTo: [],
  })

  const players = {
    '1': getPlayer(1),
    '2': getPlayer(2),
  }

  const state = {
    deck,
    hiddenCard,
    openCards,
    currentPlayer: 1,
    players,
    winner: null,
  }

  logDealCards(players, openCards, hiddenCard)

  return state
}
