import React from 'react';
import './States.css';
import Header from './../header/Header.jsx';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
export default class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: window.cs142models.statesModel(),
      inputValue: '',
    }
    console.log(window.cs142models.statesModel());
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  }
  render() {
    return (
      <div>
        <Header></Header>
          <input className="search-box" type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)}></input>
          <div className="box">
            {this.state.inputValue ? (
              this.state.states.map((el, index) => {
                if(el.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
                  return <ul key={index}>{el}</ul>
                }
              })
            ) : (
              this.state.states.map((el, index) => (
                <ul key={index}>{el}</ul>
              ))
            )}
          </div>
        </div>
    );
  }
}
