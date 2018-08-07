import { catchError, concat, delay, finalize, flatMap, tap, mapTo, startWith, switchMap } from 'rxjs/operators'
import { empty, of, from } from 'rxjs'
import { ofType } from 'redux-observable'
import { push } from 'connected-react-router'
import {
  ASYNC_CREATE_ARTICLE,
  loading,
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
