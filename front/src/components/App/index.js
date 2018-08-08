import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from 'configureStore'
import ArticlesPage from 'pages/Articles/ArticlesAsync'
import ArticleDetailsPage from 'pages/ArticleDetails/ArticleDetailsAsync'
import ArticleCreatePage from 'pages/ArticleCreate/ArticleCreateAsync'

const initialState = {}
const store = configureStore(initialState)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
        <Route exact path={"/"} component={ArticlesPage} />
          <Route exact path={"/article/create/"} component={ArticleCreatePage} />
          <Route path={"/article/:id/"} component={ArticleDetailsPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App
