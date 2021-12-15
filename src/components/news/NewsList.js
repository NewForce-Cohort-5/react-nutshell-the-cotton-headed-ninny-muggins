import React, { useContext, useEffect } from "react";
import { NewsContext } from "./NewsProvider";
import { NewsCard } from "./NewsCard";
import { useNavigate } from "react-router-dom"

export const NewsList = () => {
    const { getNews, news } = useContext(NewsContext)
    

    useEffect(() => {
        console.log("NewsList: useEffect - getNews")
        getNews()
    }, [])

    const navigate = useNavigate()
    
    return (
        <>
          <h1>News</h1>
      
          <button onClick={() => navigate("/news/create")}>
                      Add Article
                  </button>
          <div className="news">
            {
              news.map(news => {
                return <NewsCard key={news.id} news={news}/>
              })
            }
          </div>
        </>
        )
      }