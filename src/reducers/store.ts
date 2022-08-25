import {Store, createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './index'
import rootSaga from '../saga'

declare global {
  interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}


//for Redux DevTools
const composeReduxDevToolsEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle

const sagaMiddleware = createSagaMiddleware()

const initializeStore = () => {
  const middleware = composeReduxDevToolsEnhancers(
    applyMiddleware(sagaMiddleware)
  )
  const store: Store = createStore(createReducer(), middleware)
  sagaMiddleware.run(rootSaga)

  return store
}
  
export default initializeStore