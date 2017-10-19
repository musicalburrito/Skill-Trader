import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import ListingPage from './components/ListingPage';
import BrowsePage from './components/BrowsePage';

ReactDOM.render(
    <Router history = { history }>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path = "/login" component={LoginPage}/>
        <Router path = "/listings" component={ListingPage}/>
        <Router path = "/viewListings" component={BrowsePage}/>
    </Router>,
    document.getElementById('root'));