import React, { useState } from 'react';

const TodoForm = (props) => {

    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.makeTodo(newTodo);
        setNewTodo('');
    };

    return (

        <form onSubmit={handleSubmit}>

            <input 
            type="text"
            value={newTodo}
            name="newTodo"
            onChange={handleChange}
            />

            <button>Add Todo item</button>
            <button onClick={()=>props.clearComplete()}>Clear/Completed</button>
        </form>
    );
};

export default TodoForm;