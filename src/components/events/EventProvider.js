import React, { useState, createContext} from "react"

export const EventContext = createContext()
// This component establishes what data can be used.
export const EventProvider = (props) => {
  

    
    const [events, setEvents] = useState([])

    const getEventById = (id) => {
      return fetch(`http://localhost:8088/events/${id}?`)
          .then(res => res.json())
    }

    const getEvents = () => {
        return fetch("http://localhost:8088/events?_expand=location")
        .then(res => res.json())
        .then(setEvents)
    }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }

       
           
   

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEvents)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(event)
        })
          .then(getEvents)
      }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
        return (
            <EventContext.Provider value={
              {
              events, addEvent, getEvents, updateEvent, deleteEvent, getEventById
              }
            }>
              {props.children}
            </EventContext.Provider>
          )
}
