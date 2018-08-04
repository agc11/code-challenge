import React from 'react'
import { WrapperButtonsFooter } from './card-footer-styles'

const WithButtons = ({ children }) => {
  return (
    <WrapperButtonsFooter>
      { children }
    </WrapperButtonsFooter>
  )
}

export default WithButtons
