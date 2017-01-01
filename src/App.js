import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import Morecambe from './Morecambe.js';
import Carnforth from './Carnforth.js';
import Arnside from './Arnside.js';
import Kendal from './Kendal.js';
import Keswick from './Keswick.js';
import Penrith from './Penrith.js';


class App extends Component {
  render() {
    return (
      <body className="backdrop">
        <Morecambe></Morecambe>
        <Carnforth></Carnforth>
        <Arnside></Arnside>
        <Keswick></Keswick>
        <Kendal></Kendal>
        <Penrith></Penrith>

      </body>
    );
  }
}

export default App;
