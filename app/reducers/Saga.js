//@flow
import { createAction as ca } from 'redux-actions'

export const SAGA_INIT_GAME = 'saga/SAGA_INIT_GAME'
export const SAGA_APPLY_MOVE = 'saga/SAGA_APPLY_MOVE'

export const initGameSaga = () => ca(SAGA_INIT_GAME)()
export const applyMoveSaga = (card: number, targetPlayerNum: ?number, targetCard: ?number) => ca(SAGA_APPLY_MOVE)({card, targetPlayerNum, targetCard})
