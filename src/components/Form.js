import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    surname: '', 
  };

  handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState({ 
      [name]: value,
     });
  };

  handleSubmit = event => {
    event.preventDefault( );
   this.props.onSubmit(this.state); 
  //  ! посилання на обєкт із даними які заповнив користувач
  // ! передаємо в АПП, обєкт доступний в асинхр. коді
   this.reset();
  };
  
  reset = () => {
this.setState({name: '', surname: ''});

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
