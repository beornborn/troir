//@flow
import u from 'troir/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const SET_CURRENT_STATE = 'app/SET_CURRENT_STATE'
const ADD_MOVE = 'app/ADD_MOVE'

export const setCurrentState = (state: Object) => ca(SET_CURRENT_STATE)({state})
export const addMove = (card: number, player: ?number, targetCard: ?number) => ca(ADD_MOVE)({card, player, targetCard})

const initialState = {
  gameSettings: {
    playersNum: 2,
  },
  moves: [],
  states: [],
  currentState: {
    deck: [],
    openCards: [],
    hiddenCard: 0,
    currentPlayer: 0,
    players: {},
  },
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_CURRENT_STATE:
      return u(state, {currentState: {$set: p.state}, states: {$push: [p.state]}})
    default:
      return state
  }
}


// const a =  {
//   deck: [1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8],
//   hidden_card: 1,
//   open_cards: [1,1,1],
//   currentPlayer: 1,
//   players: {
//     '1': {
//       type: 'user',
//       hand: [1],
//       table: [],
//       ring: false,
//       lost: false,
//       showCardsTo: [],
//     }
//   },
//   winner: null,
// }


// START_GAME

// initial_deal

// while (no winner) {
//   if currentPlayer !== 'user'
//     delay and automove
//   else
//     take PLAYER_MOVE
//     handle move
//   end
// }
