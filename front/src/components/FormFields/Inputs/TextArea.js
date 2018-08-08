import React from 'react'
import { TextArea as TextAreaStyles } from '../styles'
import PropTypes from 'prop-types'

const TextArea = ({ value, ...rest }) => <TextAreaStyles value={value} {...rest}  />

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
}

export default TextArea
