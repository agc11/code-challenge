import {
  LOADING_ARTICLES,
  ADD_ARTICLES,
  REMOVE_ARTICLE,
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
    case REMOVE_ARTICLE: {
      const { id } = action.payload
      const articles = state.articles.filter(article => article.id !== id)
      return { ...state, articles }
    }
    default:
      return state
  }
}
