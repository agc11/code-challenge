import { catchError, delay, flatMap, mapTo } from 'rxjs/operators'
import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import { push } from 'react-router-redux'
import {
  ASYNC_CREATE_ARTICLE,
  error,
} from './actions'
import {
  createArticle,
} from 'graphql/article'

const createArticle$ = (action$, store) =>
   action$.pipe(
    ofType(ASYNC_CREATE_ARTICLE),
    delay(500),
    flatMap(({ payload: { article }}) => createArticle({ ...article })),
    mapTo(push('/')),
    catchError(err => of(error(true))),
  )

export default [
  createArticle$,
]
