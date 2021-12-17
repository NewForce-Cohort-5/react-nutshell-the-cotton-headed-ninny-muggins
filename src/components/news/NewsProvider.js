import React, { useState, createContext } from "react"

export const NewsContext = createContext()

export const NewsProvider = (props) => {

        const [news, setNews] = useState([])
        
        const getNews = () => {
            return fetch("http://localhost:8088/news")
            .then(res => res.json())
            .then(setNews)
        }

        const addNews = NewsObj => {
            return fetch("http://localhost:8088/news", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(NewsObj)
            })
            .then(response => response.json())
        }
        const updateNews = news => {
            return fetch(`http://localhost:8088/news/${news.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(news)
            })
              .then(getNews)
        }
          const getNewsById = (id) => {
            return fetch(`http://localhost:8088/news/${id}?`)
                .then(res => res.json())
        }

        const deleteNews = newsId => {
            return fetch(`http://localhost:8088/news/${newsId}`, {
                method: "DELETE"
            })
                .then(getNews)
        }
        return (
            <NewsContext.Provider value={{ 
                news, addNews, getNews, deleteNews, updateNews, getNewsById 
            }}>
                {props.children}
            </NewsContext.Provider>
        )
    }

