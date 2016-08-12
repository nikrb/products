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
  })
}
