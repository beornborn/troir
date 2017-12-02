//@flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TuneMoveModal from 'troir/app/components/game/TuneMoveModal'
import { getTuneMoveModal } from 'troir/app/reducers/selectors/Ui'
import { getGameState } from 'troir/app/reducers/selectors/App'
import { applyMoveSaga } from 'troir/app/reducers/Saga'
import { toggleTuneMoveModal } from 'troir/app/reducers/Ui'

export const mapStateToProps = (state: Object): Object => ({
  modal: getTuneMoveModal(state),
  gameState: getGameState(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({applyMove: applyMoveSaga, toggleTuneMoveModal}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TuneMoveModal)
