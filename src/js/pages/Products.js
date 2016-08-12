import React from 'react';

import FilterableProductTable from '../components/FilterableProductTable';

import ProductStore from '../stores/ProductStore';
import * as ProductActions from '../actions/ProductActions';

export default class Products extends React.Component {
  constructor(){
    super();
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      products : []
    };
  }
  componentWillMount(){
    ProductStore.on( 'change', this.getProducts);
    ProductActions.loadProducts();
  }
  componentWillUnmount(){
    ProductStore.removeListener( 'change', this.getProducts);
  }
  getProducts(){
    this.setState( { products : ProductStore.getAll()})
  }
  render(){

    return (
      <FilterableProductTable products={this.state.products} />
    );
  }
}
