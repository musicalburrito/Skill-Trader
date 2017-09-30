/**
 * Created by nancyli on 9/9/17.
 */
import React from 'react';
import {Jumbotron} from 'react-bootstrap';


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Jumbotron className="mainLanding">
                    <h1 className="text"> Find a skill </h1>
                    <form>
                        <input
                            className="searchMain"
                            type="text"
                            placeholder="Type something..."/>
                        <input
                            className="searchButton"
                            type="submit"
                            value = "Go" />
                    </form>
                </Jumbotron>
            <div className="howItWorks">
                blah blah blah
            </div>
            </div>
        );
    }
}

export default Home;