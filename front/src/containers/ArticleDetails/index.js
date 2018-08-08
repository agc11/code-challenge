import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import injectReducer from 'utils/injectReducer'
import injectEpics from 'utils/injectEpics'
import LoadingIndicator from 'components/LoadingIndicator'
import FormArticle from 'components/Article/FormArticle'
import Wrapper from './Wrapper'
import {
  fetchArticle,
  updateAsyncArticle,
} from './actions'
import reducer from './reducer'
import epics from './epics'

class ArticleDetails extends Component {
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
          : (
            <FormArticle
              handleSubmit={updateArticle}
              buttonText="Edit"
              article={article}
            />
          )

        }
      </Wrapper>
    )
  }
}

ArticleDetails.defaultProps = {
  article: {
    author: '',
    excerpt: '',
    id: '',
    title: '',
    tags: [],
    content: '',
    published: false,
  }
}

ArticleDetails.propTypes = {
  article: PropTypes.shape({
      author: PropTypes.string,
      excerpt: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      tags: PropTypes.array,
      content: PropTypes.string,
      published: PropTypes.bool,
    }
  ),
  error: PropTypes.bool,
  loading: PropTypes.bool,
  match: PropTypes.object,
  fetchArticleAction: PropTypes.func,
  updateArticle: PropTypes.func,
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
)(ArticleDetails)
