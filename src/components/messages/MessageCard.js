import React from "react";
import { useNavigate } from "react-router-dom";




export const MessageCard = ({ message ,user }) => {
    const navigate = useNavigate()

    return (
    <section className="messages">

        <div className="message__text">{message.message}</div>
        <button  
             onClick={() => {
    navigate(`/messages/edit/${message.id}`)
}}>Edit</button>
    </section>
    )
}

