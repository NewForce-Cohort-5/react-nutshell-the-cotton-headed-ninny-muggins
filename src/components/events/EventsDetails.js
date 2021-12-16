import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams, useNavigate } from "react-router-dom"

export const EventDetails = () => {
  const { getEventById, deleteEvent } = useContext(EventContext)

	const [event, setEvent] = useState({})

	const {EventId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", EventId)
    getEventById(EventId)
    .then((response) => {
      setEvent(response)
    })
    }, [])

    
    const handleRelease = () => {
        deleteEvent(event.id)
      .then(() => {
        navigate("/events")
      })
  }

  


  return (
    <section className="animal">
      <h3 className="event__name">{event.name}</h3>
      <div className="event__breed">{event.eventDate}</div>      
      <div className="event__location">Location: {event.eventLocation}</div>
    <button onClick={handleRelease}>Delete Event</button>
      <button onClick={() => {navigate(`/events/edit/${event.id}`)}}>Edit</button>
    </section>
  )
}




