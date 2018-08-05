import React from 'react'

const Checkbox = ({ name, checked, ...rest }) => <input type="checkbox" name={name} checked={checked} {...rest} />

export default Checkbox
