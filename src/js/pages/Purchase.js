import React from "react";

import PurchaseProductForm from "../components/product/PurchaseProductForm";
import ProductStore from "../stores/ProductStore";
import * as ProductActions from "../actions/ProductActions";
import CategoryStore from "../stores/CategoryStore";
import * as CategoryActions from "../actions/CategoryActions";

export default class Purchase extends React.Component {
  constructor(){
    super();
    this.getCategories = this.getCategories.bind(this);
    this.state = {
      categories : [],
      category : "",
      name : "",
      amount: 12, // number of items or weight
      cost_total : 0,
      weight_total: 0,
      unit_total: 0,
      item_or_weight:"item",
      cost_per: 0 // price per iten/weight
    };
  }
  setTotals( ){
    const {cost_per} = this.state;
    if( this.state.item_or_weight === "item"){
      this.setState( { unit_total: this.state.amount, weight_total: 0});
      this.setState( { cost_total: cost_per * this.state.unit_total});
    } else {
      this.setState( { unit_total: 0, weight_total: this.state.amount});
      this.setState( { cost_total: cost_per * this.state.weight_total});
    }
  }
  changeAmount( amt){
    console.log( "change amount");
    const val = parseFloat( amt);
    if( !Number.isNaN( val)){
      console.log( "set amount:", val);
      this.setState( {amount: val });
      //  this.setTotals();
    }
    console.log( "current state:", this.state);
  }
  productChange(e){
    console.log( "product change state:", this.state);
    switch( e.target.id){
      case "product-name": {
        this.setState( {name: e.target.value});
      }
      case "item_or_weight": {
        this.setState( { item_or_weight: e.target.value});
        this.setTotals();
      }
      case "cost_per": {
        const val = parseFloat( e.target.value);
        if( !Number.isNaN( val)){
          this.setState( {cost_per: val });
          this.setTotals();
        }
      }
    }
  }
  componentWillMount(){
    ProductStore.on( "change", this.productCreated);
    CategoryStore.on( "change", this.getCategories);
    CategoryActions.loadProductCategories();
  }
  componentWillUnmount(){
    CategoryStore.removeListener( 'change', this.getCategories);
    ProductStore.removeListener( "change", this.productCreated);
  }
  getCategories(){
    this.setState( { categories: CategoryStore.getAll()});
  }
  productCreated(){
    console.log( "create new product");
    // TODO: put up a message bar with close button
  }
  createProduct( e){
    const { category, name, cost_total, weight_total, unit_total} = this.state;
    console.log( "creating product name:", this.state);
    // ProductActions.createProduct( category, name, cost_total, weight_total, unit_total);
  }
  render(){
    return (
      <div className="container" >
        <h1>Purchase</h1>
        <PurchaseProductForm categories={this.state.categories}
                            createProduct={this.createProduct.bind(this)}
                            productChange={this.productChange.bind(this)}
                            changeAmount={this.changeAmount.bind(this)}/>
      </div>
    );
  }
}
