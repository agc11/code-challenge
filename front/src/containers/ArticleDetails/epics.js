import { delay, flatMap, map, startWith } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  GET_ASYNC_ARTICLE,
  addArticle,
  loading,
  updateLocalArticle,
  ASYNC_UPDATE_ARTICLE,
} from './actions'
import {
  fetchArticle,
  updateArticle,
} from 'graphql/article'

const fetchArticle$ = (action$, store) =>
   action$.pipe(
    ofType(GET_ASYNC_ARTICLE),
    delay(500),
    flatMap( ({ payload: { id }}) => fetchArticle({ id })),
    map(({ data: { article }}) => addArticle({ article })),
    startWith(loading(true)),
  )

const updateArticles$ = (action$, store) =>
  action$.pipe(
    ofType(ASYNC_UPDATE_ARTICLE),
    delay(500),
    flatMap(({ payload: { article }}) => updateArticle({ ...article })),
    map(({ data: { updateArticle } }) => updateLocalArticle({ ...updateArticle })),
    startWith(loading(true)),
  )

export default [
  fetchArticle$,
  updateArticles$,
]
