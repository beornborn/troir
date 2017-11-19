//@flow
import { combineReducers } from 'redux'
import data from 'troir/app/reducers/Data'
import ui from 'troir/app/reducers/Ui'
import app from 'troir/app/reducers/App'
import { navReducer as nav } from 'troir/app/__config/routes'
import { reducer as form } from 'redux-form'

const RootReducer = combineReducers({
  form,
  nav,
  data,
  app,
  ui,
})

export default RootReducer
