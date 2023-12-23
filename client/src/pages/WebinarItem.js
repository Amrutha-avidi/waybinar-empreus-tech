import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const WebinarItem = ({webinar}) => {
    const {addToCart} = useContext(CartContext)

    const { title,id, category, speaker, date, imgUrl } = webinar


    const newDate = new Date(date).toString()
    const dateReq = newDate.slice(4,15)
    
    
    return (
        <div className='webinar-item'>
            <Link to={`/webinars/${id}`}>
            <img src={imgUrl} alt='' />

            </Link>
            <div className='webinar-item-content'>
                <div>
                    <p>{category}</p>
                    <p>By {speaker}</p>
                </div>
                <h4>{title}</h4>
                <hr />
                <div>
                    <p className='webinar-item-date'>{dateReq}</p>
                    <button onClick={() => addToCart(webinar, id)}>Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default WebinarItem