import React, { Component } from 'react';
import './App.css';
import BoardMain from './component/board/BoardMain'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-default">
            <BoardMain/>
        </div>
      </div>
    );
  }
}

export default App;
