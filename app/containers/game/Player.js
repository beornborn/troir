//@flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Player from 'troir/app/components/game/Player'
import { applyMoveSaga } from 'troir/app/reducers/Saga'
import { toggleTuneMoveModal } from 'troir/app/reducers/Ui'
import { getGameState } from 'troir/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  gameState: getGameState(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({toggleTuneMoveModal, applyMove: applyMoveSaga}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Player)
