import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  constructor() {
    super()
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleFilterText = (text) => {
    this.setState({
      filterText: text
    })
  }

  handleInStockChange = () => {
    this.setState({
      inStockOnly: this.state.inStockOnly ? false : true
    })
    console.log('state', this.state)
  }

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;
    const { handleFilterText, handleInStockChange } = this;

    return (
      <div className="filterableProductTable">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          handleFilterText={handleFilterText}
          handleInStockChange={handleInStockChange} />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    )
  }
}

export default FilterableProductTable