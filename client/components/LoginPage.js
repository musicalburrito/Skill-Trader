/**
 * Created by nancyli on 9/10/17.
 */
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import LoginBox from './LoginBox';
import Header from './Header';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Header/>
                <LoginBox url='http://localhost:3000/un'/>
            </div>
        )
    }
}

export default LoginPage;