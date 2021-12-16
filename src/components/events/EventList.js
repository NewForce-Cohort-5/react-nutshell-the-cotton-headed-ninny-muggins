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

    useEffect(() => {
        if (searchTerms !== "") {
          // If the search field is not blank, display matching animals
          const subset = events.filter(event => event.name.toLowerCase().includes(searchTerms))
          setFiltered(subset)
        } else {
          // If the search field is blank, display all animals
          setFiltered(events)
        }
      }, [searchTerms, events])

      return (
        <>
          <h1>Events</h1>
    
          <button onClick={() => navigate("/events/create")}>
              Make Reservation
          </button>
          <div className="events">
          {
            filteredevents.map(event => {
              return <Event key={event.id} event={event} />
            })
          }
          </div>
        </>
      )
}


    
    

    
    
                
