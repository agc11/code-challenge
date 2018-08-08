import React from 'react'
import PropTypes from 'prop-types'
import { WrapperButtonsFooter } from './card-footer-styles'

const WithButtons = ({ children }) => {
  return (
    <WrapperButtonsFooter>
      { children }
    </WrapperButtonsFooter>
  )
}

WithButtons.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}
export default WithButtons
