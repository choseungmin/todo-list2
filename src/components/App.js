import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

    state = {
        input: '',
        todos: [
            { id:0, text: 'stydy React', done: true },
            { id:1, text: 'Component Styling', done: false }
        ]
    };

    id=1;
    getId = () => {
        return ++this.id;
    };

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    };

    handleInsert = () => {
        const { todos, input } = this.state;
        const newTodo = {}

    }



    render() {

        const { input, todos } = this.props;
        const { handleChange} = this;

        return (
            <PageTemplate>
                <TodoInput onChange={ handleChange } value={ input }/>
                <TodoList todos={ todos }/>
            </PageTemplate>
        );
    }
}

export default App;
