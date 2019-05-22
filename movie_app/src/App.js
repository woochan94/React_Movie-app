import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; 

// 모든 컴포넌트는 render를 가지고 있다. 
// render의 기능은 뭔가를 보여주는, 출력하는 기능이다. 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}

export default App;
