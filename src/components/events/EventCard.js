import React from "react"
import "./Event.css"


export const Event = ({ event }) => (
    <section className="event">
        {/* <h3 className="animal__name">{animal.name}</h3> */}
        <div className="event__id">{event.id}</div>
        <div className="event__eventName">{event.eventName}</div>
        <div className="event__eventDate">{event.eventDate}</div>
          
          <div className="event__eventLocation">{event.eventLocation}</div>
        
        
    </section>
)