import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
    id: 1,
    name: 'bananas',
    category: 'fruitAndVeggies',
    quantity: '3',
    unit: 'kgs',
  },
  {
    id: 2,
    name: 'beef',
    category: 'meat',
    quantity: '5',
    unit: 'kgs',
  },
  {
    id: 3,
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

  addItem = (e, item) => {
    e.preventDefault();

    const id = uuidv4();

    const newItem = {
      id, ...item,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));
  };

  removeItem = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  }

  render() {
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
      removeItem: this.removeItem,
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
