import React, { useContext, useEffect, useState } from "react"
import { NewsContext } from "./NewsProvider"
import "./News.css"
import { useParams, useNavigate } from "react-router-dom"

export const NewsDetails = () => {
  const { getNewsById, deleteNews } = useContext(NewsContext)

	const [news, setNews] = useState({})

	const {newsId} = useParams();
	const navigate = useNavigate();
    const newsDelete = () => {
        deleteNews(news.id)
            .then(() => {
                navigate("/news")
            })
    }

  useEffect(() => {
    console.log("useEffect", newsId)
    getNewsById(newsId)
    .then((response) => {
      setNews(response)
    })
    }, [])

  return (
    <section className="News">
      <h3 className="news__title">{news.title}</h3>
      <div className="news__location">Synopsis: {news.synopsis}</div>
      <button onClick={newsDelete}>Delete Article</button>
      <button onClick={() => {navigate(`/news/edit/${news.id}`)}}>Edit</button>
    </section>
  )
}
