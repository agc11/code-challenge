import React from 'react'
import { Input } from '../styles'

const Text = ({ value, ...rest }) => <Input type="text" value={value} {...rest} />

export default Text
