import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

import getAsyncInjectors from 'utils/asyncInjectors'


export default ({ key, reducer }) => (WrappedComponent) => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent
    static contextTypes = {
      store: PropTypes.object.isRequired,
    }
    static displayName = `withReducer(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`

    componentWillMount() {
      const { injectReducer } = this.injectors

      injectReducer(key, reducer)
    }

    injectors = getAsyncInjectors(this.context.store)

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent)
}
