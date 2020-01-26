import React, { Component } from 'react';
import { AppHeader } from './components/header';
import { AppDrawer } from './components/drawer';
import { AppForm } from './components/form';

export default  class App extends Component{
  render() {
    return (
      <div>
        <AppHeader />
        <AppDrawer />
        <AppForm/>
      </div>
    );
  }
}
