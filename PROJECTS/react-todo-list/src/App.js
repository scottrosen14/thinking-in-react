import React, { Component } from 'react';
import './App.css';
// import Header from './Header';
import List from './List';

class App extends Component {
  constructor() {
    super()
    this.state = {
      current: '',
      items: []
    };
  }

  handleChange = (e) => {
    this.setState({current: e.target.value})
    console.log('state', this.state)
  }

  addItem = (e) => {
    // make copy of items array
    let itemArray = this.state.items.slice();
    if (this.state.current !== "") {
      itemArray.unshift({
        text: this.state.current
      });
      this.setState({
        items: itemArray
      })
      e.target.value = "";
    }
    console.log(itemArray);
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <form onSubmit={this.addItem}>
            <input type="text" onChange={ this.handleChange } placeholder="enter task" />
            <input className="addBtn" type="submit" value="Add Item"/>
          </form>
        </div>
        <List entries={ this.state.items } />
      </div>
    );
  }
}

export default App;
