import React from "react";
import { Route, Routes } from "react-router-dom";
import { EventProvider } from "./events/EventProvider";
import { EventsForm } from "./events/EventsForm";
import { EventList } from "./events/EventList";
import { NewsProvider } from "./news/NewsProvider";
import { NewsForm } from "./news/NewsForm";
import { NewsList } from "./news/NewsList";
import { NewsDetails } from "./news/NewsDetails"
import { MessageList } from "./messages/messageList";
import { MessageProvider } from "./messages/messageDataProvider";
import { MessageForm } from "./messages/MessageForm"
import { MessageEditForm } from "./messages/MessageEditFrom";
import { EventDetails } from "./events/EventsDetails"


export const ApplicationViews = () => {
  return (
    <EventProvider>
    <NewsProvider>
      <MessageProvider>
      <Routes>
      <Route path="events/*" element={<EventList />} />
        <Route path="events/create/*" element={<EventsForm />} />
        <Route path="events/edit/:eventsId/*" element={<EventsForm />} />
        <Route path="news/*" element={<NewsList />} />
        <Route path="news/create/*" element={<NewsForm />} />
        <Route path="news/edit/:newsId/*" element={<NewsForm />} />
        <Route path="news/detail/:newsId/*" element={<NewsDetails />} />
        <Route path="messages/*" element={<> <MessageList/> <MessageForm/> </> } />
        <Route path="messages/edit/:messageId/*" element={<MessageEditForm />} />

        <Route path="/" element= {<p> word </p>} />
      </Routes>
      </MessageProvider>
    </NewsProvider>
    </EventProvider>
  )}
