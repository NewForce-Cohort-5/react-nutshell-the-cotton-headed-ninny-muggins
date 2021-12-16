import React, { useContext, useEffect, useState } from "react"

import { EventContext } from "./EventProvider"

import "./Event.css"
import {  useParams, useNavigate } from 'react-router-dom';

export const EventsForm = () => {
    const { addEvent, getEventById, updateEvent } = useContext(EventContext)
    

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [event, setEvent] = useState({
      
    })

    
    const [isLoading, setIsLoading] = useState(true);

    const {EventId} = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
      const newEvent = { ...event } 
      newEvent[event.target.id] = event.target.value
      setEvent(newEvent)
    }
    
    const handleSaveEvent = () => {
      if (parseInt(event.locationId) === 0 || parseInt(event.customerId) === 0){
        window.alert("Please select a location")
      } else {
        setIsLoading(true);
        if(EventId){
          updateEvent({
            id : event.id,
            name: event.name,
            
          })
          .then(() => navigate(`/events/detail/${event.id}`))
        } else {
          //Post Add
          addEvent({
            name: event.name,
            
          })
          .then(() => navigate("/events"))
        }
      }
    }

    useEffect(() => {
        getEvents().then(getLocations).then(() =>{
        if(EventId){
          getEventById(EventId)
          .then(event => {
            setEvent(event)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

   

    return (
      <form className="eventForm">
          <h2 className="eventForm__title">New Event</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Event name:</label>
                  <input type="text" id="name" 
                  onChange={handleControlledInputChange} required autoFocus className="form-control"
                  placeholder="Event Name" 
                  defaultValue={event.name}/>
              </div>
          </fieldset>

          <fieldset>
          <div className="form-group">
            <label htmlFor="Eventdate"> Date:</label>
            <input type = "date" id= "date" required className="form-control" 
            placeholder= "Date of Event"
            onChange={handleControlledInputChange}
            defaultValue={event.eventDate} ></input> 


            </div>
              </fieldset>

          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Location: </label>
                  <select defaultValue={event.locationId} name="locationId" id="locationId" className="form-control" onChange={handleControlledInputChange} >
                      <option value="0">Location: </option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>{l.name} </option>
                      ))}
                  </select>
              </div>
          </fieldset>
         
          <button className="btn btn-primary"
          disabled ={isLoading}
            onClick={event => {
              event.preventDefault(
              handleSaveEvent()
              )
            }}>
            Save Event
          </button>
      </form>
    )
}
