import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import AppContext from './context';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';
import Pantry from './views/Pantry';
import ShoppingList from './views/ShoppingList';
import Settings from './views/Settings';
import { categories, units } from './data';

const dummyItems = [
  {
    name: 'bananas',
    category: 'fruitAndVeggies',
    quantity: '3',
    unit: 'kgs',
  },
  {
    name: 'beef',
    category: 'meat',
    quantity: '5',
    unit: 'kgs',
  },
  {
    name: 'yoghurt',
    category: 'dairy',
    quantity: '6',
    unit: 'pcs',
  },
];

class App extends Component {
  state = {
    categories: [...categories],
    units: [...units],
    items: [...dummyItems],
  }

  addItem = (e, newItem) => {
    e.preventDefault();
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
  }

  render() {
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
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
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
