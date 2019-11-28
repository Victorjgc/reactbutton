



import React from 'react';
import './App.css';
import { Hello } from "./components/hello/Hello";

class App extends React.Component<{}, {}> {
  render() {
    return <Hello name="Pepe"/>;
  }
}

export default App;
