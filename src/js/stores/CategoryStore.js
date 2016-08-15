import {EventEmitter} from 'events';

import dispatcher from "../dispatcher";

class CategoryStore extends EventEmitter {
  constructor(){
    super();
    this.categories = [];
  }
  getAll(){
    return this.categories;
  }

  handleActions( action){
    switch( action.type){
      case "RECEIVE_PRODUCT_CATEGORIES":{
        this.categories = action.categories;
        console.log( "RECEIVE_PRODUCT_CATEGORIES:", action.categories);
        this.emit( "change");
      }
    }
  }
}

const categoryStore = new CategoryStore;
dispatcher.register( categoryStore.handleActions.bind( categoryStore));
export default categoryStore;
