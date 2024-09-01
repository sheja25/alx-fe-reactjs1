test('Adding a new todo', () => {
    // Mock initial state with demo todos
    const initialState = {
        todos: [
            { id: 1, text: 'Buy groceries', completed: false },
            { id: 2, text: 'Walk the dog', completed: true },
            { id: 3, text: 'Do laundry', completed: false }
        ]
    };

    // Render the TodoList component with the initial state
    render(<TodoList />, { initialState });

    // Assert that the TodoList component renders correctly
    const todoListElement = screen.getByTestId('todo-list');
    expect(todoListElement).toBeInTheDocument();

    // Assert that the initial todos are rendered
    const todoElements = screen.getAllByTestId('todo-item');
    expect(todoElements).toHaveLength(initialState.todos.length);

    // Simulate user input and form submission to add a new todo
    const newTodoText = 'Clean the house';
    const inputElement = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(inputElement, { target: { value: newTodoText } });
    fireEvent.submit(screen.getByTestId('todo-form'));

    // Assert that the new todo is added
    const updatedTodoElements = screen.getAllByTestId('todo-item');
    expect(updatedTodoElements).toHaveLength(initialState.todos.length + 1);
    expect(updatedTodoElements[updatedTodoElements.length - 1]).toHaveTextContent(newTodoText);
});