import React from "react";
import "./App.css";
import { Hello } from "./components/hello/Hello";
import { NumberPicker } from "./components/numberPicker/NumberPicker";
class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Hello name="Pepe"></Hello>
        <NumberPicker />
      </div>
    );
  }
}

export default App;
