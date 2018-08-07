export const LOADING_CREATE_ARTICLE = 'LOADING_CREATE_ARTICLE'
export const ASYNC_CREATE_ARTICLE = 'ASYNC_CREATE_ARTICLE'
export const FAIL_CREATE_ASYNC_ARTICLE = 'FAIL_CREATE_ASYNC_ARTICLE'

export const loading = (loading) => ({
  type: LOADING_CREATE_ARTICLE,
  payload: { loading },
})

export const error = (error) => ({
  type: FAIL_CREATE_ASYNC_ARTICLE,
  payload: { error },
})

export const createAsyncArticle = ({ article }) => ({
  type: ASYNC_CREATE_ARTICLE,
  payload: { article },
})
