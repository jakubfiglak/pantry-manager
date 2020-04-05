import React from 'react';
import Heading from '../components/Heading/Heading';
import SubHeading from '../components/SubHeading/SubHeading';
import List from '../components/List/List';
import AppContext from '../context';

const ShoppingList = () => (
  <AppContext.Consumer>
    {({ shoppingList }) => (
      <>
        <Heading>Your shopping list</Heading>
        <SubHeading>Let's go shopping!</SubHeading>
        <List list={shoppingList} />
      </>
    )}
  </AppContext.Consumer>
);


export default ShoppingList;
