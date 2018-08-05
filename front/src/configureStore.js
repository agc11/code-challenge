import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'
import { compose } from 'redux'

import { rootEpic } from './epics'
import createReducer from './reducers'

export const history = createHistory()

const epicMiddleware = createEpicMiddleware()

const appRouterMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancers = [epicMiddleware, appRouterMiddleware].map(middleware => applyMiddleware(middleware))


const configureStore = () => {
  const store = createStore(createReducer(), composeEnhancers(...enhancers))
  store.injectedReducers = {}
  epicMiddleware.run(rootEpic)
  return store
}

export default configureStore
