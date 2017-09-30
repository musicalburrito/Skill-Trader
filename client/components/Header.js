/**
 * Created by nancyli on 9/10/17.
 */
import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Navbar className="customNav">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Skill Trader</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1}><Link to="/login">Login</Link></NavItem>
                    <NavItem eventKey={2}><Link to="/listings">Listings</Link></NavItem>
                    {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
                        {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
                        {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
                        {/*<MenuItem divider />*/}
                        {/*<MenuItem eventKey={3.4}>Separated link</MenuItem>*/}
                    {/*</NavDropdown>*/}
                </Nav>
            </Navbar>
        )
    }
}

export default Header;