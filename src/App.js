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
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    categories: [...categories],
    units: [...units],
    items: [],
    isModalOpen: false,
    isEditModalOpen: false,
    isRemoveModalOpen: false,
    editedItemId: '',
    itemToRemoveId: '',
  };

  componentDidMount() {
    if (localStorage.getItem('items') !== null && localStorage.getItem('items') !== 'null') {
      this.setState({
        items: JSON.parse((localStorage.getItem('items'))),
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  openEditModal = (id) => {
    this.setState({
      isEditModalOpen: true,
      editedItemId: id,
    });
  };

  closeEditModal = () => {
    this.setState({
      isEditModalOpen: false,
    });
  };

  openRemoveModal = (id) => {
    this.setState({
      isRemoveModalOpen: true,
      itemToRemoveId: id,
    });
  };

  closeRemoveModal = () => {
    this.setState({
      isRemoveModalOpen: false,
    });
  };

  addItem = (e, item) => {
    e.preventDefault();

    const id = uuidv4();

    const newItem = {
      id, ...item,
    };
    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    this.closeModal();
  };

  editQuantity = (e, id, newQuantity, newMinStock) => {
    e.preventDefault();

    const { items } = this.state;
    const idx = items.findIndex((item) => item.id === id);

    const editedItem = { ...items[idx], quantity: newQuantity, minStock: newMinStock };

    this.setState((prevState) => ({
      items: prevState.items.map((item) => {
        if (item.id === id) {
          return editedItem;
        }
        return item;
      }),
    }));

    this.closeEditModal();
  }

  removeItem = (e, id) => {
    e.preventDefault();

    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));

    this.closeRemoveModal();
  };

  render() {
    const contextElements = {
      ...this.state,
      openModal: this.openModal,
      closeModal: this.closeModal,
      openEditModal: this.openEditModal,
      closeEditModal: this.closeEditModal,
      openRemoveModal: this.openRemoveModal,
      closeRemoveModal: this.closeRemoveModal,
      addItem: this.addItem,
      editQuantity: this.editQuantity,
      removeItem: this.removeItem,
    };

    const { isModalOpen, isEditModalOpen, isRemoveModalOpen } = this.state;

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
            {isModalOpen && <Modal add closeModalFn={this.closeModal} />}
            {isEditModalOpen && <Modal edit closeModalFn={this.closeEditModal} />}
            {isRemoveModalOpen && <Modal remove closeModalFn={this.closeRemoveModal} />}
          </ThemeProvider>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
