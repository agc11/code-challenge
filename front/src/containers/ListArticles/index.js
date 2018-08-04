import React, { Component } from 'react'
import { fetchArticles } from 'graphql/article'
import Card from 'components/Card'
import CardFooter from 'components/Card/CardFooter'
import Wrapper from './Wrapper'
import Button from 'components/Button';

class Articles extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  // lifecycle
  componentWillMount() {
    fetchArticles().then(response => {
      this.setState({ articles: response.data.articles })
    })
  }

  generateFooterCard({ id }) {
    return (
      <CardFooter.withButtons>
        <Button danger text="remove" action={() => console.log(`remove ${id}`)} />
        <Button primary text="update" action={() => console.log(`update ${id}`)} />
      </CardFooter.withButtons>
    )
  }

  // Renders
  render() {
    return (
      <Wrapper>
        { this.state.articles.map(article => <Card key={article.id} article={article} FooterComponent={this.generateFooterCard(article)}/>) }
      </Wrapper>
    )
  }
}

export default Articles
