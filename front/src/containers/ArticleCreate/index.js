import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import injectReducer from 'utils/injectReducer'
import injectEpics from 'utils/injectEpics'
import LoadingIndicator from 'components/LoadingIndicator'
import FormArticle from 'components/Article/FormArticle';
import Wrapper from './Wrapper'
import {
  createAsyncArticle,
} from './actions'
import reducer from './reducer'
import epics from './epics'

class ArticleCreate extends Component {
  render() {
    const { article, error, loading, handleCreateArticle } = this.props
    return (
      <Wrapper>
        { (error) ? <p>Error</p> : '' }
        { (loading)
          ? <LoadingIndicator />
          : ''
        }
        <FormArticle
          handleSubmit={handleCreateArticle}
          buttonText="Save"
          article={article}
        />

      </Wrapper>
    )
  }
}

ArticleCreate.defaultProps = {
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

ArticleCreate.propTypes = {
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
  handleCreateArticle: PropTypes.func,
}

const mapStateToProps = ({ createArticle }) => {
  return {
    ...createArticle
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleCreateArticle: ({ article }) => dispatch(createAsyncArticle({ article })),
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withEpics = injectEpics({ epics });
const withReducer = injectReducer({ key: 'createArticle', reducer });

export default  compose(
  withReducer,
  withEpics,
  withRouter,
  withConnect,
)(ArticleCreate)
