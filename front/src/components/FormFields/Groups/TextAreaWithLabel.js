import React from 'react'
import PropTypes from 'prop-types'
import WithLabel from './WithLabel'
import TextArea from '../Inputs/TextArea'

const TextAreaWithLabel = ({ id, label, ...rest }) => {
  return (
    <WithLabel text={label} htmlFor={id} >
      <TextArea id={id} {...rest} />
    </WithLabel>
  )
}

TextAreaWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default TextAreaWithLabel
