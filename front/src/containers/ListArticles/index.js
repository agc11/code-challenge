import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import injectReducer from 'utils/injectReducer'
import injectEpics from 'utils/injectEpics'
import Card from 'components/Article/Card'
import CardFooter from 'components/Article/Card/CardFooter'
import Button from 'components/Button'
import LoadingIndicator from 'components/LoadingIndicator'
import { ListCards, Wrapper } from './list-article-styles'
import {
  fetchArticles,
  removeAsyncArticle,
} from './actions'
import reducer from './reducer'
import epics from './epics'

class Articles extends Component {
  componentWillMount() {
    this.props.fetchArticlesAction()
  }

  generateFooterCard({ id }) {
    const { removeArticle, history: { push } } = this.props
    return (
      <CardFooter.withButtons>
        <Button danger text="remove" action={() => removeArticle({ id })} />
        <Button primary text="update" action={() => push(`/article/${id}/`)} />
      </CardFooter.withButtons>
    )
  }

  render() {
    const { articles, error, loading, history: { push } } = this.props
    if (error) {
      return <p>Error</p>
    }

    if (loading) {
      return <LoadingIndicator />
    }

    return (
      <Wrapper>
        <Button primary text="Create" action={() => push(`/article/create/`)} />
        <ListCards>
        {
          articles.map(article =>
            <Card key={article.id} article={article} FooterComponent={this.generateFooterCard(article)} />
          )
        }
        </ListCards>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ listArticles }) => {
  return {
    ...listArticles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticlesAction: () => dispatch(fetchArticles()),
    removeArticle: ({ id }) => dispatch(removeAsyncArticle({ id }))
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'listArticles', reducer });
const withEpics = injectEpics({ epics });

export default  compose(
  withReducer,
  withEpics,
  withRouter,
  withConnect,
)(Articles)
