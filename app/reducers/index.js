//@flow
import { combineReducers } from 'redux'
import data from 'balyabyaca/app/reducers/Data'
import ui from 'balyabyaca/app/reducers/Ui'
import app from 'balyabyaca/app/reducers/App'
import { navReducer as nav } from 'balyabyaca/app/__config/routes'
import { reducer as form } from 'redux-form'

const RootReducer = combineReducers({
  form,
  nav,
  data,
  app,
  ui,
})

export default RootReducer
