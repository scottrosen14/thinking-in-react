import React, { Component } from 'react';
import './App.css';
// import Header from './Header';
import List from './List';

// TodoApp
//   -TodoHeader
//   -List
//     -Item
//     -Item


class App extends Component {
  constructor() {
    super()
    this.state = {
      current: '',
      items: []
    };
  }

  handleChange = (e) => {
    // every time you press a key the state will reset
    this.setState({current: e.target.value})
    // console.log('state', this.state)
  }

  addItem = (e) => {
    e.preventDefault();
    // make copy of items array
    let itemsCopy = this.state.items.slice();
    if (this.state.current !== "") {
      // add to beginning of copied array
      itemsCopy.unshift({
        index: itemsCopy.length,
        text: this.state.current,
        isDone: false
      });
      this.setState({
        items: itemsCopy
      })
      console.log('state', this.state)
    }
  }

  deleteItem = (index) => {
    console.log('function firing')
    let itemsCopy = this.state.items.slice();
    let itemsFiltered = itemsCopy.filter(function(item, i) {
      return i !== index;
    })
    console.log('filtered', itemsFiltered)
    this.setState(itemsFiltered)
  }

  render() {
    const { state, deleteItem, handleChange } = this;
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <form onSubmit={this.addItem}>
            <input type="text" onChange={ this.handleChange } placeholder="enter task" />
            <input className="addBtn" type="submit" value="Add Item"/>
          </form>
        </div>
        <List state={ state } items={ state.items } deleteItem= {this.deleteItem} />
      </div>
    );
  }
}

export default App;
