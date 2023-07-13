import React, { Component } from 'react';


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
                        </article>
                        <article className='highlightCart'>
                        </article>
                        <article className='highlightCart'>
                        </article>
                    </section>
        </section>
    }
}

export default Highlights;