import React, {Component} from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends Component {

  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {

  };

  state = {
      value: this.props.initialValue,
    }
  

    handleIncrement= () => {
        this.setState(prevState => ({
          value: prevState.value + 1,
        }))
    };

    handleDecrement= () => {
      this.setState(prevState => ({
        value: prevState.value - 1,
      }))
  };

  render() {
    const {value} = this.state;
  
    return (
      <div className="Counter">
      <Value value={value}/>

        <Controls 
        onIncrement ={this.handleIncrement}
        onDecrement={this.handleDecrement}
        />
      </div>
    );
  };

};

//!This function will be converted into class as we need to add dynamics to the element.
// const Counter = () => (
//   <div className="Counter">
//     <span className="Counter__value">0</span>

//     <div>
//       <button type="button">Add 1</button>
//       <button type="button">Substract 1</button>
//     </div>
//   </div>
// );

export default Counter;
