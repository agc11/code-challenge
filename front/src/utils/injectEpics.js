import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'

import getAsyncInjectors from 'utils/asyncInjectors'

export default ({ epics }) => (WrappedComponent) => {
  class EpicsInjector extends React.Component {
    static WrappedComponent = WrappedComponent
    static contextTypes = {
      store: PropTypes.object.isRequired,
    }
    static displayName = `withEpics(${(WrappedComponent.displayName || WrappedComponent.name || 'Component')})`

    componentWillMount() {
      const { injectEpics } = getAsyncInjectors(this.context.store)
      injectEpics(epics)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(EpicsInjector, WrappedComponent)
}
