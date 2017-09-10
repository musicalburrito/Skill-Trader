/**
 * Created by nancyli on 8/15/17.
 */
import React from 'react';
import axios from 'axios';
import style from '../style.js';

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.handleUNChange = this.handleUNChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUNChange(e) {
        this.setState({ username: e.target.value });
        alert('updated: ' + this.state.username);
    }
    handleSubmit(e){
        e.preventDefault();
        alert('A name was submitted: ' + this.state.username);
        axios.post(this.props.url, { username: this.state.username })
            .catch(err => {
                console.log(err);
            })
    }
    render(){
        return(
        <form onSubmit= { this.handleSubmit }>
            <label>
                Username:
                <input
                    className="forms"
                    type="text"
                    value = { this.state.username }
                    onChange = { this.handleUNChange } />
            </label>
                <input
                    className="submitButton"
                    type="submit"
                    value = "Submit" />
        </form>
    )}
}


export default UsernameBox;