import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (

        <div>

            {props.todoData.map(item => (
                <Todo key={item.id} item={item} toggleTodo={props.toggleTodo}/>
            ))}
        </div>
    );
};

export default TodoList;