import { delay, flatMap, map, startWith } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import {
  GET_ASYNC_ARTICLES,
  REMOVE_ASYNC_ARTICLE,
  addArticles,
  removeArticle,
  loading,
} from './actions'
import {
  fetchArticles,
  deleteArticle,
} from 'graphql/article'

const fetchArticles$ = (action$, store) =>
   action$.pipe(
    ofType(GET_ASYNC_ARTICLES),
    delay(500),
    flatMap( _ => fetchArticles()),
    map(({ data: { articles }}) => addArticles({ articles })),
    startWith(loading(true)),
  )

const removeArticles$ = (action$, store) =>
   action$.pipe(
    ofType(REMOVE_ASYNC_ARTICLE),
    delay(500),
    flatMap(({ payload: { id }}) => deleteArticle({ id })),
    map(({ data: { deleteArticle } }) => removeArticle({ ...deleteArticle })),
    startWith(loading(true)),
  )

export default [
  fetchArticles$,
  removeArticles$,
]
