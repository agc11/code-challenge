import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ArticlesPage from 'pages/Articles/ArticlesAsync'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} component={ArticlesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
