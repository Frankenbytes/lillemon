import React, { Component } from 'react';
import Restauranfood from'./restauranfood.jpg';

class Hero extends Component {
    state = {  }
    render() {
        return <section className='hero'>
            <div className='heroMain'>
            <article className='bookTablePresentation'>
                <h1 className='bookTableH1'>Little Lemon</h1>
                <h2 className='bookTableH2'>Chicago</h2>
                <p className='bookTableP'>We are a family owned <br></br>Meditarranean restaurant,<br></br>focused on traditional <br></br>recipes served with a modern <br></br>twist.</p>
                <button className='btn-primary'>Reserve a Table</button>
            </article>
            <article className='heroPicContainer'>
                <img src={Restauranfood} className='heroPic'></img>
            </article>
            </div>
        </section>
    }
}

export default Hero;
