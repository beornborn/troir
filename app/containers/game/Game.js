//@flow
import { connect } from 'react-redux'
import Game from 'troir/app/components/game/Game'
import { initGame } from 'troir/app/reducers/Saga'
import { getCurrentState } from 'troir/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  currentState: getCurrentState(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  initGame: () => dispatch(initGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
