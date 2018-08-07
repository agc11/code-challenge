import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import injectReducer from 'utils/injectReducer'
import injectEpics from 'utils/injectEpics'
import LoadingIndicator from 'components/LoadingIndicator'
import EditArticle from 'components/Article/EditArticle';
import Wrapper from './Wrapper'
import {
  fetchArticle,
  updateAsyncArticle,
} from './actions'
import reducer from './reducer'
import epics from './epics'

class Article extends Component {
  componentWillMount() {
    const { fetchArticleAction, match: { params: { id } } } = this.props
    fetchArticleAction({ id })
  }



  render() {
    const { article, error, loading, updateArticle } = this.props
    return (
      <Wrapper>
        { (error) ? <p>Error</p> : '' }
        { (loading)
          ? <LoadingIndicator />
          : (<EditArticle article={article} handleEditArticle={({ article }) => updateArticle({ article })} />)
        }
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ article }) => {
  return {
    ...article
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticleAction: ({ id }) => dispatch(fetchArticle({ id })),
    updateArticle: ({ article }) => dispatch(updateAsyncArticle({ article })),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'article', reducer });
const withEpics = injectEpics({ epics });

export default  compose(
  withReducer,
  withEpics,
  withRouter,
  withConnect,
)(Article)
