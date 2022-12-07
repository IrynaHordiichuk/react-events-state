import React, { Component } from 'react';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
// import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import Form from './components/Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
      // створюємо новий масив уже без вибраного обєкта на який клікнули
    }));
  };

  
formSubmitHandler = data => {
  console.log(data);
}
  
  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleSurnameChange = event => {
  //   this.setState({ surname: event.currentTarget.value });
  // };

  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodoCount = todos.reduce((acc, todo) => (todo.completed ? + 1 : acc), 0);

    return (
      <>
        <Form onSubmit={this.formSubmitHandler}/>

        {/* <h1>Сomponent State</h1> */}

        {/* <Dropdown/> */}

        {/* <ColorPicker options={colorPickerOptions}/> */}

        {/* <Counter /> */}

        {/* <div>
          <p>Total:{totalTodoCount}</p>
          <p>Done:{completedTodoCount}</p>
        </div> */}

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
      </>
    );
  }
}

export default App;
