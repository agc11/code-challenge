import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import injectReducer from 'utils/injectReducer'
import injectEpics from 'utils/injectEpics'
import Card from 'components/Card'
import CardFooter from 'components/Card/CardFooter'
import Button from 'components/Button'
import LoadingIndicator from 'components/LoadingIndicator'
import Wrapper from './Wrapper'
import { fetchArticles } from './actions'
import reducer from './reducer'
import epics from './epics'

class Articles extends Component {
  componentWillMount() {
    this.props.fetchArticlesAction()
  }

  generateFooterCard({ id }) {
    return (
      <CardFooter.withButtons>
        <Button danger text="remove" action={() => console.log(`remove ${id}`)} />
        <Button primary text="update" action={() => this.props.history.push(`/${id}/`)} />
      </CardFooter.withButtons>
    )
  }

  render() {
    const { articles, error, loading } = this.props
    return (
      <Wrapper>
        { (error) ? <p>Error</p> : '' }
        { (loading)
            ? <LoadingIndicator />
            : articles.map(article => <Card key={article.id} article={article} FooterComponent={this.generateFooterCard(article)}/>)
        }
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
