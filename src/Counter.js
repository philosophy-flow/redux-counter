import React from "react";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "./redux/counter/counterActions";

function Counter(props) {
  return (
    <>
      <h1>Count: {props.count}</h1>
      <button onClick={() => props.increment()}>Increment</button>
      <button onClick={() => props.decrement()}>Decrement</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
