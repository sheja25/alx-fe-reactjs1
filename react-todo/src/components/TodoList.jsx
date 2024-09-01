import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, text: 'Learn React' },
                { id: 2, text: 'Build a Todo App' },
                { id: 3, text: 'Deploy to GitHub Pages' }
            ]
        };
    }

    addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text
        };
        this.setState((prevState) => ({
            todos: [...prevState.todos, newTodo]
        }));
    };

    toggleTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        }));
    };

    deleteTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id)
        }));
    };

    render() {
        const { todos } = this.state;

        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.toggleTodo(todo.id)}
                            />
                            <span>{todo.text}</span>
                            <button onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <input type="text" id="newTodo" />
                <button onClick={() => this.addTodo(document.getElementById('newTodo').value)}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default TodoList;