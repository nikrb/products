import dispatcher from "../dispatcher";
import axios from "axios";

export function loadProducts(){
  dispatcher.dispatch( {type: "FETCH_PRODUCTS"});
  axios.get( "/api/product")
  .then( (response) => {
    dispatcher.dispatch( { type: "RECEIVE_PRODUCTS", products: response.data});
  })
  .catch( (err) => {
    dispatcher.dispatch( {type: "RECEIVE_PRODUCTS_FAIL", err: err});
  });
}

export function loadProductCategories(){
  dispatcher.dispatch( {type: "FETCH_PRODUCT_CATEGORIES"});
  axios.get( "/api/category")
  .then( (response) => {
    dispatcher.dispatch( {type: "RECEIVE_PRODUCT_CATEGORIES", categories: response.data});
  })
  .catch( (err) => {
    dispatcher.dispatch( {type: "RECEIVE_PRODUCT_CATEGORIES_FAIL"});
    console.log( "GET api/category failed:", err);
  });
}
