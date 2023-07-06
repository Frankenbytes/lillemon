import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav>
                    <img src="./Logo.svg" className="App-logo" alt="logo" />
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Order online</li>
                        <li>Login</li>
                    </ul>
        </nav>;
    }
}
 
export default Navbar;
