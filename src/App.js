import React, { Component } from 'react';
import './App.css';
import FirstCommit from './components/FirstCommit';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <FirstCommit />
      </div>
    );
  }
}

export default App;
