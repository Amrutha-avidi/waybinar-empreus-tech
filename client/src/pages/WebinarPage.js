//import {Date} from 'date-fns'
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


function WebinarPage() {
    const { id } = useParams()
    const [webinar, setWebinar] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/webinars/${id}`)
            .then((response) => setWebinar(response.data[0]))
    }, [id])
    //console.log(webinar)

    const formatDate = new Date(webinar.date).toString()
    const dateReq = formatDate.slice(4, 15)


    return (
        <div className="webinar_page">
            <div>
                <p>{webinar.category}</p>
                <h1>{webinar.title}</h1>

                <p className="webinar-page-date">Webinar is going to be held on : <span>{dateReq}</span></p>
                <p className="webinar_description">{webinar.description}</p>
                <img className="webinar-page-img-sm" src={webinar.imgUrl} alt='' />

                <h2>This webinar is hosted by :</h2>
                <div className="speaker_details">
                    <img src={webinar.speaker_img} alt={webinar.speaker} />
                    <div>
                        <h3>{webinar.speaker}</h3>
                        <p>{webinar.speaker_designation}</p>
                    </div>
                </div>

                <button>Enroll Now</button>

            </div>
            <img className="webinar-page-img-lg" src={webinar.imgUrl} alt='' />
        </div>
    )
}

export default WebinarPage