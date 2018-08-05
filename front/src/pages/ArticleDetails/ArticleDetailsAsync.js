import Loadable from 'react-loadable'
import LoadingPage from 'pages/LoadingPage'

export default Loadable({
  loader: () => import(/*webpackChunkName: "article-details-page" */ 'pages/ArticleDetails'),
  loading: LoadingPage,
  delay: 300,
})
