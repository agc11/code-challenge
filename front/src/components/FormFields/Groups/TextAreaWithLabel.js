import React from 'react'
import WithLabel from './WithLabel'
import TextArea from '../Inputs/TextArea'

const CheckboxWithLabel = ({ id, label, ...rest }) => {
  return (
    <WithLabel text={label} htmlFor={id} >
      <TextArea id={id} {...rest} />
    </WithLabel>
  )
}

export default CheckboxWithLabel
