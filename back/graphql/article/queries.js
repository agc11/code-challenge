import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql'
import db from '../../db'
import articleType from './types'

const Queries = new GraphQLObjectType({
  name: 'Queries',
  description: 'This is a root queries',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(root, { id }) {
        return db.Article.findById(id);
      },
    }
  }),
})

export default Queries
