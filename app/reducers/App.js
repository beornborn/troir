//@flow
import u from 'troir/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const DEAL_CARDS = 'app/DEAL_CARDS'
const DRAW_CARD = 'app/DRAW_CARD'
const APPLY_MOVE = 'app/APPLY_MOVE'
const SET_WINNER = 'app/SET_WINNER'

export const dealCards = (state: Object) => ca(DEAL_CARDS)({state})
export const drawCard = (state: Object) => ca(DRAW_CARD)({state})
export const applyMove = (state: Object) => ca(APPLY_MOVE)({state})
export const setWinner = (winner: number) => ca(SET_WINNER)({winner})

const initialState = {
  gameSettings: {
    playersNum: 2,
  },
  currentState: {
    deck: [],
    openCards: [],
    hiddenCard: undefined,
    currentPlayer: 0,
    players: {},
  },
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case DEAL_CARDS:
    case DRAW_CARD:
    case APPLY_MOVE:
      return u(state, {currentState: {$set: p.state}})
    case SET_WINNER:
      return u(state, {currentState: {winner: {$set: p.winner}}})
    default:
      return state
  }
}
