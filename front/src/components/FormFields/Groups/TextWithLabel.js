import React from 'react'
import WithLabel from './WithLabel'
import Text from '../Inputs/Text'

const CheckboxWithLabel = ({ id, label, ...rest }) => {
  return (
    <WithLabel text={label} htmlFor={id} >
      <Text id={id} {...rest} />
    </WithLabel>
  )
}

export default CheckboxWithLabel
