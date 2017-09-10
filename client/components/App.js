import React, { Component } from 'react';
import LoginBox from './LoginBox';
import ListingForm from './ListingForm';
import Home from './Home';
import Header from './Header';
import '../styles.css';

export default class App extends Component {
    render() {
        return (
        <div className="title">
            <Header/>
            {this.props.children};
            {/*<Home/>*/}
            {/*<LoginBox url='http://localhost:3000/api/un'/>*/}
            {/*<ListingForm url='http://localhost:3000/api/listings' />*/}
        </div>);
    }
}