import { createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas'

const sagsMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagsMiddleware)))

sagsMiddleware.run(rootSaga)

export default store 