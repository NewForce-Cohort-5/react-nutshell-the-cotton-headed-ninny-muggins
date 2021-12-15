import React from "react";
import { Link } from "react-router-dom";

export const MessageCard = ({ message ,user }) => (
    <section className="messages">

        <div className="message__text">{message.message}</div>

    </section>

)

