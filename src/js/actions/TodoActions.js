import dispatcher from "../dispatcher";
import axios from "axios";

export function createTodo( text){
  console.log( "@TodoActions.createTodo POST text[%s]", text);
  axios.post( '/api/todo', { text})
  .then( (response) => {
    console.log( "created todo response:", response.data);
    const { _id, text, complete} = response.data;
    console.log( "@TodoAction.createTodo dispatch _id[%s] text[%s] complete[%s]", _id, text, complete);
    dispatcher.dispatch( {
      type: "CREATE_TODO",
      _id, text, complete
    });
  })
  .catch( (err) => {
    console.error( "@TodoActions.create todo failed:", err);
  });
}

export function deleteTodo( _id){
  dispatcher.dispatch({
    type: "DELETE_TODO",
    _id
  });
}

export function reloadTodos(){
  console.log( "@TodoActions.reloadTodos")
  dispatcher.dispatch( { type: "FETCH_TODOS"});
  // lol "or use jquery ajax if you're *still* using that"
  axios.get( "/api/todo")
  .then( (response) => {
    console.log( "@TodoActions.reloadTodos response data", response.data);
    dispatcher.dispatch( {type: "RECEIVE_TODOS", todos: response.data});
  })
  .catch( (err) => {
    console.error( "@TodoActions.reloadTodos GET failed:", err);
    dispatcher.dispatch( {type: "RECEIVE_TODOS_FAIL", err: err});
  });
}
