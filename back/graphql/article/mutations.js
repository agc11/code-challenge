import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
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
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (value, { id }) => {
        return db.Article.findByIdAndRemove(id)
      }
    },
    updateArticle: {
      type: ArticleType,
      args: {
        author: { type: GraphQLString },
        content: { type: GraphQLString },
        excerpt: { type: GraphQLString },
        id: { type: new GraphQLNonNull(GraphQLString) },
        published: { type: GraphQLBoolean },
        title: { type: GraphQLString },
      },
      resolve: (value, { id, ...rest }) => {
        return db.Article.findByIdAndUpdate(id, rest, { new: true })
      }
    },
  }),
})

export default Mutations
