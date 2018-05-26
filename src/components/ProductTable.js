import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
import TotalRow from './TotalRow'

class ProductTable extends React.Component {
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach((product, i) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={product.category}
            category={product.category} />
        );
      }
      // Controls what products are displayed depending on what the user types in the search box
      // then if the inStockOnly checkbox is checked, the page will only display those that are in stock
      if (!filterText) {
        if (inStockOnly && product.stocked) {
          rows.push(
            <ProductRow
              key={product.name}
              product={product} />
          );
        } else if (!inStockOnly) {
          rows.push(
            <ProductRow
              key={product.name}
              product={product} />
          );
        }
      } else if (filterText.trim().toLowerCase() === product.name.slice(0, filterText.length).trim().toLowerCase()) {
          if (inStockOnly && product.stocked) {
            rows.push(
              <ProductRow
                key={product.name}
                product={product} />
            );
          } else if (!inStockOnly) {
            rows.push(
              <ProductRow
                key={product.name}
                product={product} />
            );
          }
      }

      lastCategory = product.category;
    })

    console.log('rows', rows[1].props.product)
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          { rows }
          <TotalRow visibleRows={rows} />
        </tbody>
      </table>
    )
  }
}

export default ProductTable