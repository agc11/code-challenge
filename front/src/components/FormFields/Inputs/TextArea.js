import React from 'react'
import { TextArea as TextAreaStyles } from '../styles'

const TextArea = ({ value, ...rest }) => <TextAreaStyles value={value} {...rest}  />

export default TextArea
