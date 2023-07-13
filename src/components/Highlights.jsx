import React, { Component } from 'react';
import Bruschetta from './bruchetta.png';
import GreekSalad from './greek salad.jpg';
import LemonDessert from './lemon dessert.jpg';


class Highlights extends Component {
    state = {  }
    render() {
        return <section className='highlights'>
                    <section className='highlightsTop'>
                        <article className='shoutOut'>
                            <h2 className='shoutOutH2'>This weeks Specials!</h2>
                        </article>
                        <article className='highlightsButton'>
                            <button className='btn-secondary'>Online Menu</button>
                        </article>
                    </section>
                    <section className='highlightsBottom'>
                        <article className='highlightCart'>
                            <img src={GreekSalad} className='cartPic'></img>
                            <section className='cartBody'>
                            <section className='cartHead'>
                                <h3 className='dishName'>Greek Salad</h3>
                                <h3 className='cartPrice'>$12.99</h3>
                            </section>
                            <p className='cartDescription'>The famous greek salad of<br></br>
                            crispy lettuce, peppers, olives <br></br>
                            and our Chicago style feta<br></br>
                            cheese, garnished with <br></br>
                            crunchy garlic and rosemary<br></br>
                            croutons.</p>
                            <a className='orderLink'><p>Order a delivery</p></a>
                            </section>
                        </article>
                        <article className='highlightCart'>
                            <img src={Bruschetta} className='cartPic'></img>
                            <section className='cartBody'>
                            <section className='cartHead'>
                                <h3 className='dishName'>Bruschetta</h3>
                                <h3 className='cartPrice'>$5.99</h3>
                            </section>
                            <p className='cartDescription'>The famous greek salad of<br></br>
                            crispy lettuce, peppers, olives <br></br>
                            and our Chicago style feta<br></br>
                            cheese, garnished with <br></br>
                            crunchy garlic and rosemary<br></br>
                            croutons.</p>
                            <a className='orderLink'><p>Order a delivery</p></a>
                            </section>
                        </article>
                        <article className='highlightCart'>
                            <img src={LemonDessert} className='cartPic'></img>
                            <section className='cartBody'>
                            <section className='cartHead'>
                                <h3 className='dishName'>Lemon Dessert</h3>
                                <h3 className='cartPrice'>$5.00</h3>
                            </section>
                            <p className='cartDescription'>The famous greek salad of<br></br>
                            crispy lettuce, peppers, olives <br></br>
                            and our Chicago style feta<br></br>
                            cheese, garnished with <br></br>
                            crunchy garlic and rosemary<br></br>
                            croutons.</p>
                            <a className='orderLink'><p>Order a delivery</p></a>
                            </section>
                        </article>
                    </section>
        </section>
    }
}

export default Highlights;