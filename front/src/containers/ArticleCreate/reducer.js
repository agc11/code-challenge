import {
  LOADING_CREATE_ARTICLE,
  ASYNC_CREATE_ARTICLE,
  FAIL_CREATE_ASYNC_ARTICLE,
} from './actions'

const initialState = {
  article: {
    title: '',
    author: '',
    content: '',
    excerpt: '',
    published: false,
    tags: [],
  },
  error: false,
  loading: false,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CREATE_ARTICLE: {
      const { loading = false, error = false } = action.payload
      return { ...state, loading }
    }
    case FAIL_CREATE_ASYNC_ARTICLE: {
      const { error = true, loading = false } = action.payload
      return { ...state, loading, error }
    }
    default:
      return state
  }
}
