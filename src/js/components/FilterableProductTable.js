import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component {
  constructor(){
    super();
    this.state = {
      filterText: "",
      inStockOnly: false
    }
  }
  handleUserInput( filterText, inStockOnly){
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    })
  }
  render(){
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
