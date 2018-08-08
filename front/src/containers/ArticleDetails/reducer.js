import {
  LOADING_ARTICLE,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
} from './actions'

const initialState = {
  article: {},
  error: false,
  loading: false,
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
    case UPDATE_ARTICLE: {
      const { article, loading = false } = action.payload
      return { ...state, article, loading }
    }
    default:
      return state
  }
}
