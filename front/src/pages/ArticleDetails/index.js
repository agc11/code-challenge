import React from 'react'
import ArticleDetails from 'containers/ArticleDetails'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Wrapper from './Wrapper'

const ArticleDetailsPage = () => {
  return (
    <Wrapper>
      <Header />
      <ArticleDetails />
      <Footer />
    </Wrapper>
  )
}

export default ArticleDetailsPage
