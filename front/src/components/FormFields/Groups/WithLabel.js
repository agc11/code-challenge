import React from 'react'
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

export default WithLabel
