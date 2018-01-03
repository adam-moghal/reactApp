import React, { Component } from 'react';
import './App.css';

class Rows extends Component {
    render() {
        return (
            <tbody id="playerDetails">
                {
                    this.props.player.map((players) => (
                        <tr key={players.id.toString()}>
                            <td> <button class="deletePlayer"> X </button> </td>
                            <td> {players.name}</td>
                            <td> {players.age}</td>
                            <td> {players.position}</td>
                            <td> <button class="editPlayer"> Edit </button> </td>
                        </tr>
                    ))
                }
            </tbody>
        );
    }
}

export default Rows;