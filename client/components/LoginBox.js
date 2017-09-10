/**
 * Created by nancyli on 8/15/17.
 */
import React from 'react';
import axios from 'axios';

class LoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUNChange = this.handleUNChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleUNChange(e) {
        this.setState({ username: e.target.value });
        alert('updated: ' + this.state.username);
    }
    handlePassChange(e) {
        this.setState({ password: e.target.value });
        alert('updated: ' + this.state.password);
    }
    handleSubmit(e){
        e.preventDefault();
        alert('A name was submitted: ' + this.state.username);
        axios.post(this.props.url, {
            username: this.state.username,
            password: this.state.password })
            .catch(err => {
                console.log(err);
            })
    }
    render(){
        return(
            <div className="LoginBox">
                <form onSubmit= { this.handleSubmit }>
                    <input
                        type="text"
                        value = { this.state.username }
                        onChange = { this.handleUNChange }
                        placeholder = "Username"/>
                    <input
                        type = "text"
                        value = { this.state.password }
                        onChange = { this.handlePassChange }
                        placeholder= "Password" />
                    <input
                        className="submitButton"
                        type="submit"
                        value = "Submit" />
                </form>
            </div>
    )}
}


export default LoginBox;