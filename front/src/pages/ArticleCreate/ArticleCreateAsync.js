import Loadable from 'react-loadable'
import LoadingPage from 'pages/LoadingPage'

export default Loadable({
  loader: () => import(/*webpackChunkName: "article-create-page" */ 'pages/ArticleCreate'),
  loading: LoadingPage,
  delay: 300,
})
