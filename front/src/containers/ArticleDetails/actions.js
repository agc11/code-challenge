export const LOADING_ARTICLE = 'LOADING_ARTICLE'
export const GET_ASYNC_ARTICLE = 'GET_ASYNC_ARTICLE'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const FAIL_GET_ASYNC_ARTICLE = 'FAIL_GET_ASYNC_ARTICLE'

export const fetchArticle = ({ id }) => ({
  type: GET_ASYNC_ARTICLE,
  payload: { id },
})

export const addArticle = ({ article }) => ({
  type: ADD_ARTICLE,
  payload: { article },
})

export const loading = (loading) => ({
  type: LOADING_ARTICLE,
  payload: { loading },
})

export const error = () => ({
  type: FAIL_GET_ASYNC_ARTICLE,
})
