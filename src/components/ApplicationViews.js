import { Route, Routes } from "react-router-dom";
import React from "react";
import { NewsProvider } from "./news/NewsProvider";
import { NewsList } from "./news/NewsList";
import {NewsForm} from "./news/NewsForm";

export const ApplicationViews = () => {
  return (
    <NewsProvider>
      <Routes>
      <Route path="news/*" element={<NewsList />} />
                        <Route path="news/create/*" element={<NewsForm />} />
      </Routes>
    </NewsProvider>
  )
}