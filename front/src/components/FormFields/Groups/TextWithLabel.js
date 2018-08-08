import React from 'react'
import PropTypes from 'prop-types'
import WithLabel from './WithLabel'
import Text from '../Inputs/Text'

const TextWithLabel = ({ id, label, ...rest }) => {
  return (
    <WithLabel text={label} htmlFor={id} >
      <Text id={id} {...rest} />
    </WithLabel>
  )
}

TextWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default TextWithLabel
