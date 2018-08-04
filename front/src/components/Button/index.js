import React from 'react'
import { ButtonWrapper } from './button-styles'

const Button = ({ action, text, ...styles }) =>
  <ButtonWrapper {...styles} onClick={(event) => action(event)}>{ text }</ButtonWrapper>

export default Button
