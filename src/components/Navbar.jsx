import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() {
        return <nav>
                    <ul className='navbar'>
                        <li className='navItem'><a><img src="./Logo.svg" className="appLogo" alt="logo" /></a></li>
                        <li className='navItem'><a className='navLink'>Home</a></li>
                        <li className='navItem'><a className='navLink'>About</a></li>
                        <li className='navItem'><a className='navLink'>Menu</a></li>
                        <li className='navItem'><a className='navLink'>Reservation</a></li>
                        <li className='navItem'><a className='navLink'>Order online</a></li>
                        <li className='navItem'><a className='navLink'>Login</a></li>
                    </ul>
        </nav>;
    }
}

export default Navbar;
