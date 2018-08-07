import React from 'react'
import ArticleCreate from 'containers/ArticleCreate'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Wrapper from './Wrapper'

const ArticleCreatePage = () => {
  return (
    <Wrapper>
      <Header />
      <ArticleCreate />
      <Footer />
    </Wrapper>
  )
}

export default ArticleCreatePage
