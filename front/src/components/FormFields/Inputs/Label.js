import React from 'react'
import { Label as LabelStyle } from '../styles'

const Label = ({ text, htmlFor }) => {
  return (
    <LabelStyle htmlFor={htmlFor}>
      { text }
    </LabelStyle>
  )
}

export default Label
