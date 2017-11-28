//@flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TuneMoveModal from 'troir/app/components/game/TuneMoveModal'
import { getTuneMoveModal } from 'troir/app/reducers/selectors/Ui'
import { getCurrentState } from 'troir/app/reducers/selectors/App'
import { applyMove } from 'troir/app/reducers/Saga'
import { toggleTuneMoveModal } from 'troir/app/reducers/Ui'

export const mapStateToProps = (state: Object): Object => ({
  modal: getTuneMoveModal(state),
  currentState: getCurrentState(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({applyMove, toggleTuneMoveModal}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(TuneMoveModal)
