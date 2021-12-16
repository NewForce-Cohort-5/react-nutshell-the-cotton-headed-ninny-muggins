import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./messageDataProvider";
import { useNavigate, useParams } from 'react-router-dom';

export const MessageEditForm = () => {
    const { addMessage, getMessageById, updateMessage, getMessage } = useContext(MessageContext)


    //for edit, hold on to state of animal in this view
    const [message, setMessage] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { messageId } = useParams();
    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newMessage = { ...message }
        //animal is an object with properties.
        //set the property to the new value
        newMessage[event.target.name] = event.target.value
        //update state
        setMessage(newMessage)
    }

    const handleSaveMessage = () => {
        if (messageId) {

            //disable the button - no extra clicks
            setIsLoading(true);

            //PUT - update
            updateMessage({
                id: parseInt(message.id),
                userId: parseInt(localStorage.getItem("NutShell_User")),
                message: message.message
            })
                .then(() => navigate("/messages"))

        }
    }


// Get customers and locations. If animalId is in the URL, getAnimalById
useEffect(() => {
    getMessage().then(() => {
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

        <fieldset>
            <div className="form-group">
                <label htmlFor="message"></label>
                <input type="text" name="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="add message" defaultValue={message.message} />
            </div>
        </fieldset>

        <button className="btn btn-primary"
            onClick={ event => {
                event.preventDefault()
                handleSaveMessage()}}>
            Send Message
        </button>
    </form>
)
}