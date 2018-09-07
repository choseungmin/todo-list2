import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    render() {

        const { todos } = this.props;
        console.log(todos)
        const todoList = todos.map(
            (todo) => (
                <TodoItem id={todo.id} done={todo.done}>{todo.text}</TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        )
    };
};

export default TodoList