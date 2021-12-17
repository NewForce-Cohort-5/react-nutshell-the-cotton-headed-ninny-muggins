import React, { useContext, useEffect, useState } from "react"

import { EventContext } from "./EventProvider"

import "./Event.css"
import {  useParams, useNavigate } from 'react-router-dom';

export const EventsForm = () => {
    const { addEvent, getEventById, updateEvent, getEvents } = useContext(EventContext)
    

    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [eventState, setEventState] = useState({
        userId: +localStorage.getItem("NutShell_User"),
        eventName: "",
        eventDate: "",
        eventLocation: ""
        
    })

    
    const [isLoading, setIsLoading] = useState(false);

    const {eventId} = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
      const newEventState = { ...eventState } 
      newEventState[event.target.name] = event.target.value
      setEventState(newEventState)
    }
    
    const handleSaveEvent = () => {
      if (parseInt(eventState.locationId) === 0) {
        window.alert("Please select a location")
      } else {
        setIsLoading(true);
      
        if(eventId){
          updateEvent({
            id : +eventState.id,
            eventName: eventState.eventName,
            eventDate: eventState.eventDate,
            eventLocation: eventState.eventLocation,
            userId: +localStorage.getItem("NutShell_User")
            
          })
          .then(() => navigate(`/events/detail/${eventState.id}`))
        } else {
          //Post Add
          addEvent({
            eventName: eventState.eventName,            
            eventDate: eventState.eventDate,
            eventLocation: eventState.eventLocation,
            userId: +localStorage.getItem("NutShell_User")
            
          })
          .then(() => navigate("/events"))
        }
      }
    }

    useEffect(() => {
        
        if(eventId){
          getEventById(eventId)
          .then(event => {
            setEventState(event)
            setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
     
    }, [])

   

    return (
      <form className="eventForm">
          <h2 className="eventForm__title">New Event</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Event name:</label>
                  <input type="text" name="eventName" 
                  onChange={handleControlledInputChange} required autoFocus className="form-control"
                  placeholder="Event Name" 
                  defaultValue={eventState.eventName}/>
              </div>
          </fieldset>

          <fieldset>
          <div className="form-group">
            <label htmlFor="date"> Date:</label>
            <input type = "date" name="eventDate" required className="form-control" 
            placeholder= "Date of Event"
            onChange={handleControlledInputChange}
            defaultValue={eventState.eventDate} ></input> 


            </div>
              </fieldset>

              <fieldset>
            <div className="form-group">
              <label htmlFor="url">location:</label>
              <input type="text" name="eventLocation" onChange={handleControlledInputChange} className="form-control" placeholder="Location" defaultValue={eventState.eventLocation}/></div>
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
