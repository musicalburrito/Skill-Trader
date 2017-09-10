import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import LoginBox from './components/LoginBox';

ReactDOM.render(
    <Router history = { history }>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path = "/login" component={LoginBox}/>
    </Router>,
    document.getElementById('root'));