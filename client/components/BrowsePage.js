/**
 * Created by nancyli on 9/30/17.
 */
/**
 * Created by nancyli on 9/16/17.
 */
/**
 * Created by nancyli on 9/10/17.
 */
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Header from './Header';
import List from './List';

class BrowsePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Header/>
                <List url='http://localhost:3000/listings'/>
            </div>
        )
    }
}

export default BrowsePage;