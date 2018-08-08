import conformsTo from 'lodash/conformsTo'
import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import createReducer from 'reducers'
import { epics$ } from 'epics'


export function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    injectedReducers: isObject,
  }

  if (!conformsTo(store, shape)) {
    console.error('(app/utils...) asyncInjectors: Expected a valid redux store')
  }
}

export function injectAsyncReducer(store, isValid) {
  return function injectReducer(name, asyncReducer) {
    if (!isValid) checkStore(store)
    if (!isString(name) || isEmpty(name) || !isFunction(asyncReducer)) {
      console.error('(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function')
    }

    if (Reflect.has(store.injectedReducers, name)) return

    store.injectedReducers[name] = asyncReducer
    store.replaceReducer(createReducer(store.injectedReducers))
  }
}

export function injectAsyncEpics(store, isValid) {
  return function injectEpics(epics) {
    if (!isValid) checkStore(store)

    if (!Array.isArray(epics)) {
      console.error('(app/utils...) injectAsyncEpics: Expected `epics` to be an array of functions')
    }

    if (isEmpty(epics)) {
      console.warn('(app/utils...) injectAsyncEpics: Received an empty `epics` array')
    }

    epics.forEach((epic) => {
      epics$.next(epic)
    })
  }
}

export default function getAsyncInjectors(store) {
  checkStore(store)

  return {
    injectReducer: injectAsyncReducer(store, true),
    injectEpics: injectAsyncEpics(store, true),
  }
}
