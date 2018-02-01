import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }

  createTasks = (item) => {
    return <li>{item.text}</li>
  }

  render() {
    // entries is an array of the item objects that each have a text property
    const { entries } = this.props;
    let todoEntries = entries.slice();
    let listItems = todoEntries.map((item) => <li>{item.text}</li>);
    console.log('lI', listItems)

    return (
      <ul className="list">
        { listItems }
      </ul>
    )
  }
}

export default List;