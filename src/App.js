import React, { Component } from 'react';
import PaintingList from './PaintingList';
import Navbar from './Navbar';
import Search from './Search';

class App extends Component {
   state = {
     filter: ''
   }

   updateFilter = newFilter => {
     this.setState({ filter: newFilter }, () => console.log(this.state))
   }

  render() {
    return (
      <div className="App">
        <Navbar
          color='blue'
          title='Welcome to my painting app!'
          subtitle="Isn't this cool?"
          icon='react'
        />
        <Search updateFilter={this.updateFilter}/>
        <PaintingList filter={this.state.filter}/>
      </div>
          )
  }
}

export default App;
