/**
 * Created by nancyli on 8/19/17.
 */
import React from 'react';
import axios from 'axios';
import '../styles.css';

class ListingForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            username : '',
            description : ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTitleChange(e){
        this.setState({ title: e.target.value });
    }
    handleUsernameChange(e){
        this.setState({ username: e.target.value });
    }
    handleDescriptionChange(e){
        this.setState({ description: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({ title: '', username: '', description: '' });
        axios.post(this.props.url, { title: this.state.title,
            username: this.state.username,
            description: this.state.description })
            .catch(err => {
                console.log(err);
            })
        alert()
    }
    render(){
        return(

            <form onSubmit={ this.handleSubmit }>
                <input
                    className="forms"
                    type = 'text'
                    placeholder = 'title'
                    value = { this.state.title }
                    onChange= { this.handleTitleChange } />
                <input
                    className="forms"
                    type = 'text'
                    placeholder = 'username'
                    value = { this.state.username }
                    onChange= { this.handleUsernameChange } />
                <input
                    className="forms"
                    type = 'text'
                    placeholder = 'description'
                    value = { this.state.description }
                    onChange = { this.handleDescriptionChange } />
                <span>
                    <span>
                        <input
                            className="submitButton"
                            type="submit"
                            value = "Submit"/>
                    </span>
                </span>
            </form>

        )
    }
}

export default ListingForm;