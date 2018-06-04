import React, { Component } from 'react';
import { connect } from 'react-redux';

import FruitsList from './components/FruitsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="fruits">
        <h1>🍓 Fruit List 🥝</h1>
        <FruitsList fruits={ this.props.fruits }/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
      fruits: state.fruits 
  }
}

export default connect(mapStateToProps)(App);
