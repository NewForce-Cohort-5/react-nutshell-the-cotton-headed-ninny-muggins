import { Route, Routes } from "react-router-dom";
import React from "react";
import { MessageList } from "./messages/messageList";
import { MessageProvider } from "./messages/messageDataProvider";

export const ApplicationViews = () => {
  return (
     <MessageProvider>
    <Routes>
     
      <Route path="messages/*" element={ <MessageList/> } />

        <Route path="/" element= {<p> word </p>} />
      
    </Routes>
    </MessageProvider>

  )
}