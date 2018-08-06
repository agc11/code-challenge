import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} from 'graphql'
import db from '../../db'
import ArticleType from './types'

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'This is a root mutations',
  fields: () => ({
    deleteArticle: {
      type: ArticleType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (value, { id }) => {
        return db.Article.findByIdAndRemove(id)
      }
    }
  }),
})

export default Mutations
