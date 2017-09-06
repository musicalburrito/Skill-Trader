import React, { Component } from 'react';
import style from '../style';
import UsernameBox from './UsernameBox';
import ListingForm from './ListingForm'


export default class App extends Component {
    render() {
        return (
        <div style={ style.title }>
            <h1>Title</h1>
            <UsernameBox url='http://localhost:3000/api/un'/>
            <ListingForm url='http://localhost:3000/api/listings' />
        </div>);
    }
}