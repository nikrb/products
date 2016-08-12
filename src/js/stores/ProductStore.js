import {EventEmitter} from 'events';

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
  constructor(){
    super();
    this.products = [];
  }
  getAll(){
    return this.products;
  }
  handleActions( action){
    switch( action.type){
      case "RECEIVE_PRODUCTS":{
        this.products = action.products;
        this.emit( "change");
      }
    }
  }
}

const productStore = new ProductStore;
dispatcher.register( productStore.handleActions.bind( productStore));
export default productStore;
