//@flow
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AppReducer from 'balyabyaca/app/reducers'
import sagas from 'balyabyaca/app/sagas'
import { createLogger } from 'redux-logger'

console.disableYellowBox = true

const logger = createLogger({
  collapsed: true,
  actionTransformer: (action) => ({type: action.type, ...action.payload})
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(AppReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(sagas, store.dispatch)

export default store
