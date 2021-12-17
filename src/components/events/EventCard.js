import React from "react"
import "./Event.css"
import { Link } from "react-router-dom"


export const Event = ({ event }) => {
    if (event.userId === +localStorage.activeUser){
    }
    return (
    <section className="event">
        {/* <h3 className="animal__name">{animal.name}</h3> */}
        <div className="event__id">{event.id}</div>
        <h3><Link to={`/events/detail/${event.id}`}>{event.eventName}
            </Link></h3>
        <div className="event__eventName">{event.eventName}</div>
        <div className="event__eventDate">{event.eventDate}</div>
          
          <div className="event__eventLocation">{event.eventLocation}</div>
        
        
    </section>
)}