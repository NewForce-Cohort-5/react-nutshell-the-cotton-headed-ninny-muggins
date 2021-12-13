import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { NewsProvider } from "./news/NewsProvider";

export const ApplicationViews = () => {
  return (
    <NewsProvider>
      <Routes>
      </Routes>
    </NewsProvider>
  )
}