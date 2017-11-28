//@flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Player from 'troir/app/components/game/Player'
import { applyMove } from 'troir/app/reducers/Saga'
import { toggleTuneMoveModal } from 'troir/app/reducers/Ui'
import { getCurrentState } from 'troir/app/reducers/selectors/App'

export const mapStateToProps = (state: Object): Object => ({
  currentState: getCurrentState(state),
})

export const mapDispatchToProps = (dispatch: Function): Object => (
  bindActionCreators({toggleTuneMoveModal, applyMove}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Player)
