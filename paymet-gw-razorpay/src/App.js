import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PaymentComponent from './components/PaymentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Outside payment</h1>
        <PaymentComponent></PaymentComponent>
      </div>
    );
  }
}

export default App;
