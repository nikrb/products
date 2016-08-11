import React from "react";

// import Todo from "../components/Todo";
import TodoList from "../components/Todo/TodoList";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor(){
    super();
    // TODO: omg really? so all callers use this object!
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: [], // TodoStore.getAll()
      newTodoText: ""
    };
    console.log( "intial todo state:", this.state);
  }
  componentWillMount(){
    console.log( "@Todos.componentWillMount");
    // new es6 arrow function automatically binds to this
    TodoStore.on( 'change', this.getTodos);
    this.reloadTodos();
    // just to be sure
    console.log( "listener count (should be one)",
                  TodoStore.listenerCount( 'change'));
  }
  componentWillUnmount(){
    // prevent memory leak by removing the listener
    TodoStore.removeListener( 'change', this.getTodos);
  }
  getTodos(){
    this.setState({
      todos: TodoStore.getAll()
    });
  }
  changeNewTodoText(e){
    this.setState( { newTodoText : e.target.value});
  }
  createTodo(e){
    // TODO: add an input field and grab the text
    TodoActions.createTodo( this.state.newTodoText);
  }
  reloadTodos(){
    TodoActions.reloadTodos();
  }
  render() {
    const { todos, newTodoText}  = this.state;
    console.log( "@Todos.render todos count[%d] new text[%s]", todos.length, newTodoText);

    return (
      <div>
        <button onClick={this.createTodo.bind(this)}>New Todo:</button>
        <input value={newTodoText} onChange={this.changeNewTodoText.bind(this)} />
        <TodoList todos={todos} />
      </div>
    );
  }
}
