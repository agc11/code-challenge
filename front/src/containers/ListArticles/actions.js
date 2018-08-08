export const LOADING_ARTICLES = 'LOADING_ARTICLES'
export const GET_ASYNC_ARTICLES = 'GET_ASYNC_ARTICLES'
export const ADD_ARTICLES = 'ADD_ARTICLES'
export const REMOVE_ASYNC_ARTICLE = 'REMOVE_ASYNC_ARTICLE'
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'

export const fetchArticles = () => ({
  type: GET_ASYNC_ARTICLES,
})

export const addArticles = ({ articles }) => ({
  type: ADD_ARTICLES,
  payload: { articles },
})

export const loading = (loading) => ({
  type: LOADING_ARTICLES,
  payload: { loading },
})

export const removeAsyncArticle = ({ id }) => ({
  type: REMOVE_ASYNC_ARTICLE,
  payload: { id }
})

export const removeArticle = ({ id }) => ({
  type: REMOVE_ARTICLE,
  payload: { id }
})
