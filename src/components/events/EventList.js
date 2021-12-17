import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import {Event } from "./EventCard"
import "./Event.css"
import { useNavigate } from "react-router-dom"




export const EventList = () => {
    const { events, getEvents, searchTerms } = useContext(EventContext)
    const [ filteredevents, setFiltered ] = useState([])
  

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getEvents()
        
    }, [])

    const navigate = useNavigate()

    

      return (
        <>
          <h1>Events</h1>
    
          <button onClick={() => navigate("/events/create")}>
              Create Event
          </button>
          <div className="events">
          {
            events.map(event => {
              return <Event key={event.id} event={event} />
            })
          }
          </div>
        </>
      )
}


    
    

    
    
                
