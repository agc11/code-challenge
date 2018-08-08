
export const DELETE_ARTICLE = id => `
  mutation {
    deleteArticle(id: "${id}") {
      id
    }
  }
`
export const UPDATE_ARTICLE = ({ id, author, content, excerpt, published, tags, title }) => `
  mutation {
    updateArticle(
      id: "${id}"
      author: "${author}"
      content: "${content}"
      excerpt: "${excerpt}"
      published: ${published}
      title: "${title}"
      tags: [${tags.map(tag => `"${tag}"`)}]
    ) {
      author
      content
      excerpt
      id
      published
      tags
      title
    }
  }
`
export const CREATE_ARTICLE = ({ author, content, excerpt, published, tags, title }) => `
  mutation {
    addArticle(
      author: "${author}"
      content: "${content}"
      excerpt: "${excerpt}"
      published: ${published}
      title: "${title}"
      tags: [${tags.map(tag => `"${tag}"`)}]
    ) {
      author
      content
      excerpt
      id
      published
      tags
      title
    }
  }
`
