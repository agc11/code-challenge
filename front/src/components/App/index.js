import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from 'configureStore'
import ArticlesPage from 'pages/Articles/ArticlesAsync'

const initialState = {}
const store = configureStore(initialState)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={`/`} component={ArticlesPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App
