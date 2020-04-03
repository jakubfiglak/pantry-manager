import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';
import Pantry from './views/Pantry';
import ShoppingList from './views/ShoppingList';
import Settings from './views/Settings';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/pantry" />} />
          <Route path="/pantry" component={Pantry} />
          <Route path="/shopping" component={ShoppingList} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
