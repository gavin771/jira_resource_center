import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header } from 'semantic-ui-react'
import FixedMenu from './FixedMenu.js';
import FixedFooter from './FixedFooter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedMenu />
        <Container className="App-content" style={{ marginTop: '9em' }}>
          <Header as='h1' dividing>Control Centre</Header>
        </Container>
        <FixedFooter />
      </div>
    );
  }
}

export default App;
