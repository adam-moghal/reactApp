import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import Rows from "./Rows.js";

class Table extends Component {
      render() {
        return (
            <table className="playersTable">
                <table>
                    <Header/>
                    <Rows player={this.props.player} /> 
                </table>
            </table>
        );
    }
}

export default Table;