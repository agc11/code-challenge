import { delay, flatMap, map, startWith } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  GET_ASYNC_ARTICLE,
  addArticle,
  loading,
} from './actions'
import {
  fetchArticle,
} from 'graphql/article'

const fetchArticle$ = (action$, store) =>
   action$.pipe(
    ofType(GET_ASYNC_ARTICLE),
    delay(500),
    flatMap( ({ payload: { id }}) => fetchArticle({ id })),
    map(({ data: { article }}) => addArticle({ article })),
    startWith(loading(true)),
  )

export default [
  fetchArticle$,
]
