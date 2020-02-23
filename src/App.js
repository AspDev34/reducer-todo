import React, { useReducer } from 'react';
import { initialState, todoReducer } from '../src/reducers/todoReducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const makeTodo = (item) => dispatch({type:'ADD_ITEM', playload: item});
  const toggleTodo = (id) => dispatch({type:'TOGGLE_ITEM', playload: id});
  const clearCompleted = () => dispatch({type:'CLEAR_COMPLETED'});

  return (
    <div className="App">
      
      <h1>To Do List</h1>
      <TodoForm makeTodo={makeTodo} clearCompleted={clearCompleted}/>
      <TodoList todoData={state.todoData} toggleTodo={toggleTodo}/>
    </div>
  );
};

export default App;
