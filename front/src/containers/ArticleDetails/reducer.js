import {
  LOADING_ARTICLE,
  ADD_ARTICLE,
  FAIL_GET_ASYNC_ARTICLE,
} from './actions'

const initialState = {
  article: {}
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE: {
      const { article = {}, loading = false, error = false } = action.payload
      return { ...state, article, loading, error }
    }
    case LOADING_ARTICLE: {
      const { loading = false } = action.payload
      return { ...state, loading }
    }
    default:
      return state
  }
}
