import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./Table.js";

//const url = "http://localhost:3000/api/player/";


class App extends Component {
  constructor() {
    super();
    this.state = {
      player: [{
        id: 1,
        name: "Petr Cech",
        age: 35,
        position: "Goalkeeper"
      }]
    }

    // this.onSuccess = (response) => {
    //   return response.json();
    // };
    // this.onError = (error) => {
    //   console.log(error);
    // };

    // this.load = () => {
    //   fetch(url)
    //     .then((resp) => resp.json().then((players) => {
    //       this.setState({ player: players });
    //     }));
    // }


  }

  componentDidMount() {
   //  this.load();
  }

  // createPlayer(){
  //   let id = document.getElementById("inputPlayerId").value;
  //   let name = document.getElementById("inputPlayerAge").value;
  //   let age = document.getElementById("inputPlayerPosition").value;
  //   let position = document.getElementById("inputPlayerName").value;
    
  //   let newPlayer = {
  //     id : id,
  //     name : name,
  //     age : age,
  //     position : position
  //   }

  //   const request = new Request(url, {
  //         method: "POST",
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(newPlayer)
  //       });
  //       return fetch(request).then(this.onSuccess, this.onError);
  // }
  
  addPlayer(){
    let array = this.state.player
   alert(array.length) 
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
            <input id="inputPlayerId" type="text" placeholder="player ID"></input>
            <input id="inputPlayerName" type="text" placeholder="player name"></input>
            <input id="inputPlayerAge" type="Number" placeholder="player age"></input>
            <input id="inputPlayerPosition" type="text" placeholder="player position"></input>
             <input type="button" id ="addPlayer" onClick = {this.addPlayer.bind(this)} value="Create"></input> 
          </form>
        </div>
        <Table player={this.state.player} />
      </div>
    );
  }
}

export default App;