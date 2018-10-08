import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import theme from './ui/theme';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import WorkPage from './pages/WorkPage';
import NotFoundPage from './pages/NotFoundPage';

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/works/:workId" component={WorkPage} />
            <Route path="/works" component={WorksPage} />
            <Route path="/" component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
