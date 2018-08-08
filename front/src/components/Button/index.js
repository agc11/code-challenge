import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './button-styles'

const Button = ({ action, text, ...styles }) =>
  <ButtonWrapper {...styles} onClick={(event) => action(event)}>{ text }</ButtonWrapper>

Button.defaultProps = {
  action: () => console.warn('empty action'),
  text: 'default',
}

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
}

export default Button
