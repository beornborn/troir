//@flow
import { StackNavigator } from 'react-navigation'
import Game from 'balyabyaca/app/components/game/Game'

export const AllNavigators = StackNavigator({
  Game: {
    screen: Game,
  },
}, {headerMode: 'none'})

const InitialAction = AllNavigators.router.getActionForPathAndParams('Game')
const initialState = AllNavigators.router.getStateForAction(InitialAction)
export const navReducer = (state: Object = initialState, action: Action) => AllNavigators.router.getStateForAction(action, state)
