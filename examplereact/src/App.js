import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table.js";

const url = "http://localhost:3000/api/player/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    }


    this.handleSubmitInParent = (dataFromForm) => {
      let array = this.state.player;
      array.push({
        id: array.length,
        name: dataFromForm.myData
      })
      this.setState({ array })
    }

    this.load = () => {
      fetch(url)
        .then((resp) => resp.json().then((players) => {
          this.setState({ player: players });
        }));
    }

    this.onSuccess = (response) => {
      return response.json();
    };
    this.onError = (error) => {
      console.log(error);
    };
  }

  componentDidMount() {
    this.load();
  }

  createPlayer() {
    let players = this.state.player;

    let name = document.getElementById("inputPlayerName").value;
    let age = document.getElementById("inputPlayerAge").value;
    let position = document.getElementById("inputPlayerPosition").value;

    let newPlayer = {
      id: players.length + 1,
      name: name,
      age: age,
      position: position
    }
    players.push(newPlayer)
    this.setState({ players })
    this.clearInputs();

    const request = new Request(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlayer)
    });
    return fetch(request).then(this.onSuccess, this.onError);

  }

  deletePlayerFromTableAndDB(event) {
    const element = event.target;
    event.preventDefault();
    let playerID = element.attributes["data-id"].value

    const row = element.parentNode.parentNode;
    row
      .parentNode
      .removeChild(row);

    const request = new Request(url + playerID, {
      method: "DELETE"
    });
    return fetch(request);
  }
  editPlayerFromTableAndDB(event) {
    const element = event.target;
    event.preventDefault();
    let playerID = element.attributes["data-id"].value
    alert(playerID)
  }

  clearInputs() {
    document
      .getElementById("inputPlayerName")
      .value = "";
    document
      .getElementById("inputPlayerAge")
      .value = "";
    document
      .getElementById("inputPlayerPosition")
      .value = "";
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="createPlayer">
          <form>
            <input id="inputPlayerName" type="text" placeholder="player name"></input>
            <input id="inputPlayerAge" type="Number" placeholder="player age"></input>
            <input id="inputPlayerPosition" type="text" placeholder="player position"></input>
            <input type="button" id="addPlayer" onClick={this.createPlayer.bind(this)} value="Create"></input>
          </form>
        </div>
        <Table player={this.state.player} delete={this.deletePlayerFromTableAndDB} edit={this.editPlayerFromTableAndDB} />
      </div>
    );
  }
}

export default App;