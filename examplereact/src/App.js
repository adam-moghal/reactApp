import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: [
        {
          id: 1,
          name: "Petr Cech",
          age: 35,
          position: "Goalkeeper"
        },
        {
          id: 2,
          name: "Laurent Koscielny",
          age: 32,
          position: "Defender"
        },
        {
          id: 3,
          name: "Mesut Ozil",
          age: 19,
          position: "Midfielder"
        },
        {
          id: 1,
          name: "Alexander Lacazette",
          age: 35,
          position: "Striker"
        }
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Table player={this.state.player}/>
      
      </div>
    );
  }
}

export default App;