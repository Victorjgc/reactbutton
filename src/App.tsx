import React from "react";
import "./App.css";
import * as Redux from "redux";
import rootReducer, { AppState } from "./reducers";
import { Hello } from "./components/hello/Hello";
import NumberPicker from "./components/numberPicker/NumberPicker";
import { Provider } from "react-redux";
import { decrementCounter, incrementCounter } from "./actions";
import Header from "./containers/Header";

const store: Redux.Store<AppState> = Redux.createStore(rootReducer);

function increment() {
  store.dispatch(incrementCounter(1));
}

function decrement() {
  store.dispatch(decrementCounter(1));
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Hello name="Pepe"></Hello>
        <NumberPicker />
        <Header />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </Provider>
    );
  }
}

export default App;
