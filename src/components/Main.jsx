import React, { Component } from 'react';
import Hero from './Hero';
import Highlights from './Highlights';

class Main extends Component {
    state = {  }
    render() {
        return <main><Hero></Hero>
                    <Highlights></Highlights>
                </main>;
    }
}

export default Main;
