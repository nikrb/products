import dispatcher from "../dispatcher";
import axios from "axios";

export function loadProducts(){
  dispatcher.dispatch( {type: "FETCH_PRODUCTS"});
  axios.get( "/api/product")
  .then( (response) => {
    dispatcher.dispatch( { type: "RECEIVE_PRODUCTS", products: response.data});
  })
  .catch( (err) => {
    dispatcher.dispatch( {type: "RECEIVE_PRODUCTS_FAIL", error: err});
  });
}

export function createProduct( category, name, cost_total, weight_total,
                                unit_total, stocked ){
  dispatcher.dispatch( {type: "CREATING_PRODUCT"});
  axios.post( "/api/product", { category, name, cost_total, weight_total,
                                  unit_total, stocked})
  .then( (response) => {
    console.log( "created new product:", response.data);
    // TODO: in the todo app we grab the fields explicitly and pass them
    //      can we just pass the payload back?
    dispatcher.dispatch( { type: "CREATED_PRODUCT", product: response.data});
  })
  .catch( (err) => {
    console.error( "create product failed:", err);
    dispatcher.dispatch( {type: "CREATE_PRODUCT_FAIL", error: err})
  })
}
