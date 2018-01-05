import React, { Component } from 'react';
import './App.css';

class Header extends Component {

    render() {
        return (
            <thead>
                <th>&nbsp;</th>
                <th>name</th>
                <th>age</th>
                <th>position</th>
                <th>&nbsp;</th>
            </thead>
        );
    }
}

// const Header = (props) => (
//     <thead>
//         <th>&nbsp;</th>
//         <th>{props.header1}</th>
//         <th>{props.header2}</th>
//         <th>{props.header3}</th>
//         <th>&nbsp;</th>
//     </thead>
// );
export default Header;