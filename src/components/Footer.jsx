import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return <footer>
            <img src="./Logo.svg" className="App-logo" alt="logo" />
            <ul>
                <li>Doormat Navigation</li>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservation</a></li>
                <li><a>Order online</a></li>
                <li><a>Login</a></li>
                <li><a>Register</a></li>
            </ul>
            <ul>
                <li>Contact info</li>
                <li><a>E-mail</a></li>
                <li><a>Support</a></li>
                <li><a>Owner</a></li>
                <li><a>Adress</a></li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <li><a>Facebook</a></li>
                <li><a>Instagram</a></li>
                <li><a>Twitter</a></li>
                <li><a>TikTok</a></li>
                <li><a>Youtube</a></li>
            </ul>
        </footer>;
    }
}
 
export default Footer;
