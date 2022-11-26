import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    // ! это стрелочная функция в публичном свойстве поэтому есть доступ к this.state.activeOptionIdx;
    const optionClassesArr = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClassesArr.push('ColorPicker__option--active');
    }

    return optionClassesArr.join(' ');
    // ! вернули масив (чи строку ?? !!!) із двох класів із розділювачем пробіл
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    // - вычисляемые данніе (derived data), то что вычисляется на базе пропсов (массив options которій приход извне) и стейта
    // - патерн Деструктуризация пропов и стейтов в методе рендер (и не только в нем)
    
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p> Color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color}}
              onClick={() => {this.setActiveIdx(index)}}
              //!в онКлік передаємо ПОСИЛАННЯ на ф-ю, для цього засуваємо виклик в колбек, якщо просто 
              // поставити - то передали виклик ф-її(результат іі роботи), підставиться undefined
              // під час виклику анонімної ф-і вона викличе method setActiveIndex.
              // індекс буде доступний через ЗАМИКАННЯ
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
