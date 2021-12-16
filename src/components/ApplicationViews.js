import React from "react";
import { Route, Routes } from "react-router-dom";
import { EventProvider } from "./events/EventProvider";
import { EventsForm } from "./events/EventsForm";
import { EventList } from "./events/EventList";
// import { EventsDetails } from "./events/EventsDetails"
export const ApplicationViews = () => {
  return (
    <EventProvider>
      <Routes>
        <Route path="events/*" element={<EventList />} />
        <Route path="events/create/*" element={<EventsForm />} />
        <Route path="events/edit/:eventsId/*" element={<EventsForm />} />
        {/* <Route path="events/detail/:eventsId/*" element={<EventsDetails />} /> */}
      </Routes>
    </EventProvider>
  )
}