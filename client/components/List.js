/**
 * Created by nancyli on 9/16/17.
 */
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import axios from 'axios';

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = { data: "" };
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    }
    loadCommentsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }
    componentDidMount() {
        this.loadCommentsFromServer();
    }
    render() {
        return(
            <div>
                { this.state.data };
            </div>
        )
    }
}

export default List;