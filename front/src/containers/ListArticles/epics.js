import { delay, flatMap, map, startWith } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  GET_ASYNC_ARTICLES,
  addArticles,
  loading,
} from './actions'
import {
  fetchArticles,
} from 'graphql/article'

const fetchArticles$ = (action$, store) =>
   action$.pipe(
    ofType(GET_ASYNC_ARTICLES),
    delay(500),
    flatMap( _ => fetchArticles()),
    map(({ data: { articles }}) => addArticles({ articles })),
    startWith(loading(true)),
  )

export default [
  fetchArticles$,
]
