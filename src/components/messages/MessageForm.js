import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./messageDataProvider";
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from "../User/userProvider";


export const MessageForm = () => {
  const { addMessage, updateMessage, getMessageById, getMessages, singleMessage, constructNewMessage } = useContext(MessageContext)

  const { user } = useContext(UserContext)

  //for edit, hold on to state of animal in this view
  const [message, setMessage] = useState({});
  //wait for data before button is active
  const [isLoading, setIsLoading] = useState(true);

  const { messageId } = useParams();
  const navigate = useNavigate();

  //when field changes, update state. This causes a re-render and updates the view.
  //Controlled component
  const handleControlledInputChange = (event) => {
    //When changing a state object or array,
    //always create a copy make changes, and then set state.
    const newMessage = { ...message }
    //animal is an object with properties.
    //set the property to the new value
    newMessage[event.target.id] = event.target.value
    //update state
    setMessage(newMessage)
  }

  const handleSaveMessage = () => {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (messageId) {
        //PUT - update
        updateMessage({
          id: message.id,
          name: user.name
          
        })
          .then(() => navigate(`/message/detail/${message.id}`))
      } else {
        //POST - add
        addMessage ({
            id: message.id,
            name: user.name
          
        })
          .then(() => navigate("/message"))
      }
    }
  

  // Get customers and locations. If animalId is in the URL, getAnimalById
  useEffect(() => {
    getMessages().then(() => {
      if (messageId) {
        getMessageById(messageId)
          .then(message => {
            setMessage(message)
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  //since state controlls this component, we no longer need
  //useRef(null) or ref

  return (
    
    <form className="messageForm">
      <h2 className="message__title">Edit Message</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Message: </label>
          <input type="text" name="message" required autoFocus className="form-control"
            proptype="varchar"
            placeholder="News Title"
            defaultValue={singleMessage.message}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
     
      <button type="submit"
        onClick={evt => {
          evt.preventDefault()
          constructNewMessage()
        }}
        className="btn btn-primary">
        Save Changes
      </button>
    </form>
  )
    }

