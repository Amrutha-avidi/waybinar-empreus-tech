import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <div className='index'>
            <div>
                <h1>Online Webinar</h1>
                <p>Waybinar is a platform where you can join engaging webinars conducted by experts in skill and personality development, exploring various fields like food, finance, business, corporate, marketing, communication, real estate, medical, and law. Expand your horizons today for absolute free of cost...  <br /><br />Let's learn something new today !</p>
                <Link to={'/webinars'}>
                    <button>Explore</button>
                </Link>
            </div>
            <img src='./images/index3.png' alt='index' />

        </div>
    )
}

export default IndexPage