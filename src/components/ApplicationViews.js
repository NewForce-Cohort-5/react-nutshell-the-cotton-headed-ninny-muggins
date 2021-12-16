import React from "react";
import { Route, Routes } from "react-router-dom";
import { EventProvider } from "./events/EventProvider";
import { EventsForm } from "./events/EventsForm";
import { EventList } from "./events/EventList";
import { MessageList } from "./messages/messageList";
import { MessageProvider } from "./messages/messageDataProvider";
import { MessageForm } from "./messages/MessageForm"
import { MessageEditForm } from "./messages/MessageEditFrom";
import { EventDetails } from "./events/EventsDetails"
export const ApplicationViews = () => {
  return (
    <EventProvider>
    <MessageProvider>
      <Routes>
        <Route path="events/*" element={<EventList />} />
        <Route path="events/create/*" element={<EventsForm />} />
        <Route path="events/edit/:eventsId/*" element={<EventsForm />} />
        <Route path="messages/*" element={<> <MessageList/> <MessageForm/> </> } />
      <Route path="messages/edit/:messageId/*" element={<MessageEditForm />} />
         <Route path="events/detail/:eventsId/*" element={<EventDetails />} /> 
      </Routes>
      </MessageProvider>
      </EventProvider>
  )
}