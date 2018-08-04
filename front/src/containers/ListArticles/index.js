import React, { Component } from 'react';
import { fetchArticles } from 'graphql/article';

class Articles extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    fetchArticles().then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
        <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
    );
  }
}

export default Articles
