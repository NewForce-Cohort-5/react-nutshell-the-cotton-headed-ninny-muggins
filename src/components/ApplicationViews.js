import { Route, Routes } from "react-router-dom";
import React from "react";
import { MessageList } from "./messages/messageList";
import { MessageProvider } from "./messages/messageDataProvider";
import { MessageForm } from "./messages/MessageForm"
import { MessageEditForm } from "./messages/MessageEditFrom";
export const ApplicationViews = () => {
  return (
     <MessageProvider>
    <Routes>
     
      <Route path="messages/*" element={<> <MessageList/> <MessageForm/> </> } />
      <Route path="messages/edit/:messageId/*" element={<MessageEditForm />} />

        <Route path="/" element= {<p> word </p>} />
      
    </Routes>
    </MessageProvider>

  )
}