import React from 'react'

class SearchBar extends React.Component {
  render() {
  const { handleFilterText, handleInStockChange } = this.props;

    return (
      <form>
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
      </form>
    )
  }
}

export default SearchBar