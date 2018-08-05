import {
  LOADING_ARTICLES,
  ADD_ARTICLES,
  FAIL_GET_ASYNC_ARTICLES,
} from './actions'

const initialState = {
  articles: [],
  error: false,
  loading: false,
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES: {
      const { articles = [], loading = false, error = false } = action.payload
      return { ...state, articles, loading, error }
    }
    case LOADING_ARTICLES: {
      const { loading = false } = action.payload
      return { ...state, loading }
    }
    default:
      return state
  }
}
