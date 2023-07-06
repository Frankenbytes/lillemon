import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav>
                    <img src="./Logo.svg" className="App-logo" alt="logo" />
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservation</a></li>
                        <li><a>Order online</a></li>
                        <li><a>Login</a></li>
                    </ul>
        </nav>;
    }
}
 
export default Navbar;
