import {
  ARTICLES_QUERY,
  ARTICLE_QUERY,
} from './queries'
import request from './request'

export const fetchArticles = () => request(ARTICLES_QUERY)
export const fetchArticle = ({ id }) => request(ARTICLE_QUERY(id))

