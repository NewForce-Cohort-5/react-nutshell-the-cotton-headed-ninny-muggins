import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./messageDataProvider";
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from "../User/userProvider";


export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    const { messages, getMessage } = useContext(MessageContext)



   

    const [message, setMessage] = useState({
        
        userId: parseInt(localStorage.getItem("NutShell_User")),
        message: ""

    });

    const { MessageId } = useParams();

    const navigate = useNavigate();

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    */

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
                .then(() => getMessage())
                .then(() => setMessage({
                    userId: parseInt(localStorage.getItem("NutShell_User")),
                    message: ""

                }))
        }
    }

    useEffect(() => {
        getMessage()
    }, [])


    return (
        <form className="animalForm">

            <fieldset>
                <div className="form-group">
                    <label htmlFor="message"></label>
                    <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="add message" value={message.message} />
                </div>
            </fieldset>

            <button className="btn btn-primary"
                onClick={handleClickSaveMessages}>
                Send Message
            </button>
            
        </form>
    )
}
