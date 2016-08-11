import { EventEmitter} from 'events';

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor(){
    super();
    this.todos = [];
  }
  createTodo( _id, text, complete){
    console.log( "@TodoStore.createTodo emit change and push id[%s] text[%s] complete[%s]", _id, text, complete);
    this.todos.push( {
      _id,
      text,
      complete
    });
    console.log( "new todo list:", this.todos);
    this.emit( "change");
  }
  getAll(){
    return this.todos;
  }

  handleActions( action){
    // TODO: new syntax for switch? no break using {}
    switch( action.type){
      case "CREATE_TODO":{
        console.log( "@TodoStore.handleActions received dispatcher CREATE_TODO")
        this.createTodo( action._id, action.text, action.complete);
      }
      case "RECEIVE_TODOS":{
        this.todos = action.todos;
        console.log( "@TodoStore.handleActions received dispatcher RECEIVE_TODOS");
        this.emit("change");
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register( todoStore.handleActions.bind(todoStore));
export default todoStore;
