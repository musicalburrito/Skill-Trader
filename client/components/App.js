import React, { Component } from 'react';
import Header from './Header';
import '../styles.css';

export default class App extends Component {
    render() {
        return (
        <div className="title">
            <Header/>
            {this.props.children};
        </div>);
    }
}