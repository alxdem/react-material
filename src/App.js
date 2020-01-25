import React, { Component } from 'react';
import { AppHeader } from './components/header';
import { AppDrawer } from './components/drawer';

export default  class App extends Component{
  render() {
    return (
      <div>
        <AppHeader />
        <AppDrawer />
      </div>
    );
  }
}
