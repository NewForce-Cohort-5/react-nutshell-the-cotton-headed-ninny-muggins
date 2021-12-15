import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./messageDataProvider";
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from "../User/userProvider";


export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    const { messages, getMessages } = useContext(MessageContext)


    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [message, setMessage] = useState({
      userId: "",
      message: ""
      
    });

    const navigate = useNavigate();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */
    useEffect(() => {
      getMessages()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newMessage = { ...message }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newMessage[event.target.id] = event.target.value
      // update state
      setMessage(newMessage)
    }

    const handleClickSaveMessages = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const MessageId = parseInt(message.MessageId)
      

      if (MessageId === 0) {
        window.alert("Please type a message")
      } else {
        //invoke addAnimal passing animal as an argument.
        //once complete, change the url and display the animal list
        addMessage(message)
        .then(() => navigate("/messages"))
      }
    }

    return (
      <form className="animalForm">
          
          <fieldset>
              <div className="form-group">
                  <label htmlFor="message"></label>
                  <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="add message" value={message.message}/>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            onClick={handleClickSaveMessages}>
            Send Message
          </button>
      </form>
    )
}
