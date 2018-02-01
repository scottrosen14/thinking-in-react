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

  // onChange = (e) => {
  //   let stateNew = Object.assign({}, this.state);
  //   stateNew.current = e.target.value;
  //   this.setState(stateNew);
  //   console.log('state', this.state)
  // }

  addItem = (e) => {
    let itemArray = this.state.items;
    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value
      });
      this.setState({
        items: itemArray
      })

      this._inputElement.value = "";
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
            <input className="enterItem" ref={ (a) => this._inputElement = a }
             placeholder="enter task" />
            <input className="addBtn" type="submit" value="Add Item"/>
          </form>
        </div>
        <List entries={ this.state.items } />
      </div>
    );
  }
}

export default App;
