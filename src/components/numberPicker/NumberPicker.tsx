import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../actions/index";

interface NumberPickerProps {
  initialCounter?: number;
  incrementCounter?: (newValue: number) => void;
  decrementCounter?: (newValue: number) => void;
  counter?: number;
}

export class NumberPicker extends React.Component<NumberPickerProps> {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    if (this.props.incrementCounter) {
      this.props.incrementCounter(3);
    }
  }

  decrement() {
    if (this.props.decrementCounter) {
      this.props.decrementCounter(3);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h1>{this.props.counter || 0}</h1>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { counter: state.counter.value };
};

const mapDispatchToProps = dispatch => ({
  incrementCounter: (value: number) => dispatch(incrementCounter(value)),
  decrementCounter: (value: number) => dispatch(decrementCounter(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(NumberPicker);
