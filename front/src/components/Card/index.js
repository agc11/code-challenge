import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import { Title, Excerpt } from './card-styles'

const Card = ({ article, FooterComponent }) => {
  return (
    <Wrapper>
      <Title>{ article.author }</Title>
      <Excerpt>{ article.excerpt }</Excerpt>
      { FooterComponent }
    </Wrapper>
  )
}


Card.defaultProps = {
  article: {
    excerpt: '...',
  }
}

Card.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  FooterComponent: PropTypes.element,
}

export default Card
