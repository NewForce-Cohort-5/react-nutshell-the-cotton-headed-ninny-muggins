import React from "react";
import { Route, Routes } from "react-router-dom";
import { NewsProvider } from "./news/NewsProvider";
import { NewsForm } from "./news/NewsForm";
import { NewsList } from "./news/NewsList";
import { NewsDetails } from "./news/NewsDetails"


export const ApplicationViews = () => {
  return (
    <NewsProvider>
      <Routes>
        <Route path="news/*" element={<NewsList />} />
        <Route path="news/create/*" element={<NewsForm />} />
        <Route path="news/edit/:newsId/*" element={<NewsForm />} />
        <Route path="news/detail/:newsId/*" element={<NewsDetails />} />
      </Routes>
    </NewsProvider>
  )
}