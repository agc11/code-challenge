import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ name, checked, ...rest }) => <input type="checkbox" name={name} checked={checked} {...rest} />

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool.isRequired,
}

export default Checkbox
