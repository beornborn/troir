//@flow
import u from 'troir/app/utils/ImmutabilityHelper'
import { createAction as ca } from 'redux-actions'

const TOGGLE_TUNE_MOVE_MODAL = 'ui/TOGGLE_TUNE_MOVE_MODAL'

export const toggleTuneMoveModal = (card: number) => ca(TOGGLE_TUNE_MOVE_MODAL)({card})

const initialState = {
  tuneMoveModal: {open: false, card: 0}
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case TOGGLE_TUNE_MOVE_MODAL:
      return u(state, {tuneMoveModal: {$set: {open: !state.tuneMoveModal.open, card: p.card}}})
    default:
      return state
  }
}
