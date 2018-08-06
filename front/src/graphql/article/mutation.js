
export const DELETE_ARTICLE = id => `
  mutation {
    deleteArticle(id: "${id}") {
      id
    }
  }
`
