import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  render(){
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      const re = new RegExp( this.props.filterText, 'i');
      if( ! re.test( product.name.toLowerCase()) ||
          (!product.stocked && this.props.inStockOnly)){
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product._id} />);
      lastCategory = product.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
