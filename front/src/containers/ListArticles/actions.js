export const LOADING_ARTICLES = 'LOADING_ARTICLES'
export const GET_ASYNC_ARTICLES = 'GET_ASYNC_ARTICLES'
export const ADD_ARTICLES = 'ADD_ARTICLES'
export const FAIL_GET_ASYNC_ARTICLES = 'FAIL_GET_ASYNC_ARTICLES'

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
