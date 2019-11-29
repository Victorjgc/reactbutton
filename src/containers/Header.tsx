import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter, resetCounter } from "../actions/index";

export interface HeaderProps {
  counter: number;
  incrementCounter?: (value: number) => {};
  decrementCounter?: (value: number) => {};
  resetCounter?: (value: number) => {};
}

class Header extends React.Component<HeaderProps, {}> {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    if (this.props.incrementCounter) {
      this.props.incrementCounter(2);
    }
  }
  decrement() {
    if (this.props.decrementCounter) {
      this.props.decrementCounter(2);
    }
  }
  reset() {
    if (this.props.resetCounter) {
      this.props.resetCounter(0);
    }
  }

  render() {
    return (
      <ul>
        <li>Number of movies: {this.props.counter}</li>
        <li>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.reset}>Reset</button>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { counter: state.counter.value };
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: (value: number) => dispatch(incrementCounter(value)),
  decrementCounter: (value: number) => dispatch(decrementCounter(value)),
  resetCounter: (value: number) => dispatch(resetCounter(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
