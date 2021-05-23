import React from "react";
import ReactDOM from "react-dom";
import States from "./components/states/States";
import Example from "./components/example/Example";

class ProblemFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didClick: false,
    };
  }
  handleClick = () => {
    this.setState({ didClick: !this.state.didClick }, () => {
      console.log(this.state.didClick);
    });
  };
  render() {
    return (
      <div>
        {this.state.didClick ? (
          <div>
            <button onClick={this.handleClick}>Switch to States</button>
            <Example />
          </div>
        ) : (
          <div>
            <button onClick={this.handleClick}>Switch to Example</button>
            <States />
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<ProblemFour />, document.getElementById("reactapp"));
