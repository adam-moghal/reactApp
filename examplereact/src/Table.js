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
                    <Rows player={this.props.player} delete = {this.props.delete} edit = {this.props.edit}/> 
                </table>
            </table>
        );
    }
}

export default Table;