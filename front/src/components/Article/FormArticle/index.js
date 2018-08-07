import React, { Component } from 'react';
import FormFields from 'components/FormFields'
import Button from 'components/Button';
import Wrapper from './Wrapper'

class FormArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: props.article,
    }
  }

  handleChange({ field, value }) {
    const { article } = this.state
    this.setState({ article: { ...article, ...{ [field]: value } }})
  }

  handleSubmit(event) {
    const { article } = this.state
    const { handleSubmit } = this.props
    handleSubmit({ article })
  }

  formConfig() {
    const { article } = this.state

    return [
      {
        Component: FormFields.TextWithLabel,
        label: "title",
        htmlFor: "title",
        id: "title",
        value: article.title,
        onChange: (event) => this.handleChange({ field: 'title', value: event.target.value }),
      },
      {
        Component: FormFields.TextWithLabel,
        label: "author",
        htmlFor: "author",
        id: "author",
        value: article.author,
        onChange: (event) => this.handleChange({ field: 'author', value: event.target.value }),
      },
      {
        Component: FormFields.TextAreaWithLabel,
        label: "content",
        htmlFor: "content",
        id: "content",
        value: article.content,
        onChange: (event) => this.handleChange({ field: 'content', value: event.target.value }),
      },
      {
        Component: FormFields.TextAreaWithLabel,
        label: "excerpt",
        htmlFor: "excerpt",
        id: "excerpt",
        value: article.excerpt,
        onChange: (event) => this.handleChange({ field: 'excerpt', value: event.target.value }),
      },
      {
        Component: FormFields.CheckboxWithLabel,
        label: "published",
        htmlFor: "published",
        id: "published",
        checked: article.published,
        onChange: (event) => this.handleChange({ field: 'published', value: event.target.checked }),
      },

    ]
  }

  render() {
    const { buttonText } = this.props
    return (
      <Wrapper>
        { this.formConfig().map(({ Component, id, ...fieldConfig }) => <Component key={id} id={id} {...fieldConfig} />) }
        <Button primary action={(event) => this.handleSubmit(event)} text={buttonText} />
      </Wrapper>
    )
  }
}

export default FormArticle
