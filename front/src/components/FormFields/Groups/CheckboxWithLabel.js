import React from 'react'
import WithLabel from './WithLabel'
import Checkbox from '../Inputs/Checkbox'

const CheckboxWithLabel = ({ id, label, ...rest }) => {
  return (
    <WithLabel text={label} htmlFor={id} >
      <Checkbox id={id} {...rest} />
    </WithLabel>
  )
}

export default CheckboxWithLabel
