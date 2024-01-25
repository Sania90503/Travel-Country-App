import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Card(props){  

    return(
        <>
        <section>
        <div className="image">
<img src={`./${props.cardImage}`} className='img1' alt='mount'/>
        </div>
        <div className="detail">
            <span className="location-icon">
            <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span className="location-name"> {props.locationName} </span>
           <span className="location-map"> Google Maps </span> 
            <h1 className="location">{props.location}</h1>
<p className="date"><b>{props.date}</b></p>
<p className="information">{props.information}</p>
            </div>
        </section>
        </>
    )

}