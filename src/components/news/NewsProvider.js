import React, { useState, createContext } from "react"

export const NewsContext = createContext()

export const NewsProvider = (props) => {

        const [news, setNews] = useState([])
        
        const getNews = () => {
            return fetch("http://localhost:8088/news")
            .then(res => res.json())
            .then(setNews)
        }

        const addNews = news => {
            return fetch("http://localhost:8088/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(news)
            })
            .then(response => response.json())
        }

        const deleteNews = newsId => {
            return fetch(`http://localhost:8088/news/${newsId}`, {
                method: "DELETE"
            })
                .then(getNews)
        }
        return (
            <NewsContext.Provider value={{ news, addNews, getNews, deleteNews }}>

                {props.children}
            </NewsContext.Provider>
        )
    }

