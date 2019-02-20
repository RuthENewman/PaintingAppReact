import React, { Component } from 'react';
import PaintingList from './PaintingList';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super()
    this.greet = this.greet.bind(this)
  }
  greet() {
    console.log('I am', this);
  }

  render() {
    this.greet();
    return (
      <div className="App">
        <Navbar
          color='blue'
          title='Welcome to my painting app!'
          subtitle="Isn't this cool?"
          icon='react'
        />
        <PaintingList greet={this.greet}/>
      </div>
          )
  }
}

export default App;
