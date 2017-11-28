//@flow
import { createAction as ca } from 'redux-actions'

export const SAGA_INIT_GAME = 'saga/SAGA_INIT_GAME'
export const SAGA_APPLY_MOVE = 'saga/SAGA_APPLY_MOVE'

export const initGame = () => ca(SAGA_INIT_GAME)()
export const applyMove = (card: number, player: ?number, targetCard: ?number) => ca(SAGA_APPLY_MOVE)({card, player, targetCard})
