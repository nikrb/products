import React from "react";

import PurchaseProductForm from "../components/product/PurchaseProductForm";
import ProductStore from "../stores/ProductStore";
import * as ProductActions from "../actions/ProductActions";

export default class Purchase extends React.Component {
  constructor(){
    super();
    this.getCategories = this.getCategories.bind(this);
    this.state = {
      categories : []
    };
  }
  componentWillMount(){
    ProductStore.on( "change", this.getCategories);
    ProductActions.loadProductCategories();
  }
  componentWillUnmount(){
    ProductStore.removeListener( 'change', this.getCategories);
  }
  getCategories(){
    this.setState( { categories: ProductStore.getCategories()});
  }
  render(){
    return (
      <div className="container" >
        <h1>Purchase</h1>
        <PurchaseProductForm categories={this.state.categories} />
      </div>
    );
  }
}
