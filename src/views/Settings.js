import React from 'react';
import Heading from '../components/Heading/Heading';
import Subheading from '../components/SubHeading/SubHeading';
import List from '../components/List/List';
import AppContext from '../context';

const Settings = () => (
  <AppContext.Consumer>
    {({ categories, units }) => (
      <>
        <Heading>Settings</Heading>
        <Subheading>Your categories</Subheading>
        <List list={categories} />
        <Subheading>Your units</Subheading>
        <List list={units} />
      </>
    )}
  </AppContext.Consumer>
);

export default Settings;
