import React, { Component } from 'react';
import './App.css';

class Rows extends Component {

    render() {
        return (
            <tbody id="playerDetails">
                {
                    this.props.player.map((players) => (
                        <tr>
                            <td> <button data-id={players.id} class="deletePlayer" onClick={this.props.delete}> X </button> </td>
                            <td id= "name"> {players.name}</td>
                            <td> {players.age}</td>
                            <td> {players.position}</td>
                            <td> <button data-id={players.id} class="editPlayer" onClick={this.props.edit}> Edit </button> </td>
                        </tr>
                    ))
                }
            </tbody>
        );
    }
}
export default Rows;