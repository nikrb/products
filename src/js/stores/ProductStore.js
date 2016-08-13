import {EventEmitter} from 'events';

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
  constructor(){
    super();
    this.products = [];
    this.categories = [];
  }
  getAll(){
    return this.products;
  }
  getCategories(){
    return this.categories;
  }
  handleActions( action){
    switch( action.type){
      case "RECEIVE_PRODUCTS":{
        this.products = action.products;
        this.emit( "change");
      }
      case "RECEIVE_PRODUCT_CATEGORIES":{
        this.categories = action.categories;
        console.log( "RECEIVE_PRODUCT_CATEGORIES:", action.categories);
        this.emit( "change");
      }
    }
  }
}

const productStore = new ProductStore;
dispatcher.register( productStore.handleActions.bind( productStore));
export default productStore;
