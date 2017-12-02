//@flow
import u from 'troir/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const DEAL_CARDS = 'app/DEAL_CARDS'
const DRAW_CARD = 'app/DRAW_CARD'
const APPLY_MOVE = 'app/APPLY_MOVE'
const SET_WINNER = 'app/SET_WINNER'

export const dealCardsApp = (state: Object) => ca(DEAL_CARDS)({state})
export const drawCardApp = (state: Object) => ca(DRAW_CARD)({state})
export const applyMoveApp = (state: Object) => ca(APPLY_MOVE)({state})
export const setWinnerApp = (winner: number) => ca(SET_WINNER)({winner})

const initialState = {
  gameSettings: {
    playersNum: 2,
  },
  gameState: {
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
      return u(state, {gameState: {$set: p.state}})
    case SET_WINNER:
      return u(state, {gameState: {winner: {$set: p.winner}}})
    default:
      return state
  }
}
