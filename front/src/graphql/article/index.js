import { ARTICLES_QUERY } from './queries'
import request from './request'

export const fetchArticles = () => request(ARTICLES_QUERY)

