import React from 'react'
import PropTypes from 'prop-types'
import { Label as LabelStyle } from '../styles'

const Label = ({ text, htmlFor }) => {
  return (
    <LabelStyle htmlFor={htmlFor}>
      { text }
    </LabelStyle>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
}

export default Label
