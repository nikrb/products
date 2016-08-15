import dispatcher from "../dispatcher";
import axios from "axios";

export function loadProductCategories(){
  dispatcher.dispatch( {type: "FETCH_PRODUCT_CATEGORIES"});
  axios.get( "/api/category")
  .then( (response) => {
    dispatcher.dispatch( {type: "RECEIVE_PRODUCT_CATEGORIES", categories: response.data});
  })
  .catch( (err) => {
    dispatcher.dispatch( {type: "RECEIVE_PRODUCT_CATEGORIES_FAIL", error:err});
    console.log( "GET api/category failed:", err);
  });
}
