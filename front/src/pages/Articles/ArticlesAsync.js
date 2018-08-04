import Loadable from 'react-loadable'
import LoadingPage from 'pages/LoadingPage'

export default Loadable({
  loader: () => import(/*webpackChunkName: "articles-page" */ 'pages/Articles'),
  loading: LoadingPage,
  delay: 300,
})
