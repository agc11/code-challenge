import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../styles'

const Text = ({ value, ...rest }) => <Input type="text" value={value} {...rest} />

Text.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Text
