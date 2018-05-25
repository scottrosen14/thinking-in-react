import React from 'react'

class SearchBar extends React.Component {
  render() {
  const { handleFilterText, handleInStockChange } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleFilterText(e.target.value)} />
        <br/>
        <input
          type="checkbox"
          onChange={() => handleInStockChange()} />
          Only show products in stock
        <br/>
      </div>
    )
  }
}

export default SearchBar