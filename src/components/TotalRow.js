import React from 'react'

class TotalRow extends React.Component {
  render () {
    const { visibleRows } = this.props;
    let sum = visibleRows.reduce((acc, visibleRow, i) => {
      if (visibleRow.props.product) {
        return acc + Number(visibleRow.props.product.price.slice(1));
      } else {
        return acc;
      }
    }, 0)
    sum = sum.toFixed(2);

    return (
      <tr>
        <th>Total</th>
        <td style={{color: 'blue'}}>{ '$' + sum }</td>
      </tr>
    )
  }
}

export default TotalRow;