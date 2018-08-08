import React from 'react'
import PropTypes from 'prop-types'
import WithLabel from './WithLabel'
import Checkbox from '../Inputs/Checkbox'

const CheckboxWithLabel = ({ id, label, ...rest }) => {
  return (
    <WithLabel text={label} htmlFor={id} >
      <Checkbox id={id} {...rest} />
    </WithLabel>
  )
}

CheckboxWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default CheckboxWithLabel
