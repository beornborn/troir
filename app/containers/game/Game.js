//@flow
import { connect } from 'react-redux'
import Game from 'troir/app/components/game/Game'
import { initGameSaga } from 'troir/app/reducers/Saga'
import { getGameState } from 'troir/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  gameState: getGameState(state)
})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  initGame: () => dispatch(initGameSaga())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
