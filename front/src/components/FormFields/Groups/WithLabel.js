import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Inputs/Label'
import { WrapperGroupWithLabel } from '../styles'

const WithLabel = ({ text, htmlFor, children }) => {
  return (
    <WrapperGroupWithLabel>
      <Label htmlFor={htmlFor} text={text} />
      { children }
    </WrapperGroupWithLabel>
  )
}

WithLabel.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  children: PropTypes.element,
}

export default WithLabel
