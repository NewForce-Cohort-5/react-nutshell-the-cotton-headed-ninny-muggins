import React, { useContext, useEffect, useState } from "react"
import { NewsContext } from "./NewsProvider"
import { useNavigate, useParams }  from 'react-router-dom';
import { Moment } from "moment";

export const NewsForm = () => {
    const { addNews, updateNews, getNewsById } = useContext(NewsContext)
    const [news, setNews] = useState( 
        {
        userId: +localStorage.getItem("nutshell_user"),
        title: "",
        synopsis: "",
        url: "",
        })



    const { newsId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    //controlled component makes cops, makes changes, then set state
    const handleControlledInputChange = (event) => {

        const newNews = {...news}

        newNews[event.target.name] = event.target.value

        setNews(newNews)
    }

    const handleSaveNews = () => {
        if (parseInt(news.title) === "") {
            window.alert("Please select an article")
        } else {
            setIsLoading(true);
            if (newsId){
                updateNews({
                    userId: +localStorage.getItem("nutshell_user"),
                    id: news.id,
                    title: news.title,
                    synopsis: news.synopsis,
                    url: news.url,
                    
                })
                .then(() => navigate(`/news/detail/${news.id}`))
            } else {
            addNews ({
                    userId: +localStorage.getItem("nutshell_user"),
                    title: news.title,
                    synopsis: news.synopsis,
                    url: news.url,
                    
            })
            .then(() => navigate("/news"))
            }
        }
    }

    useEffect(() => {
          if (newsId){
            getNewsById(newsId)
            .then(news => {
                setNews(news)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
      }, [])

      return (
        <form className="newsForm">
          <h2 className="newsForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="newsName">Article Title:</label>
                    <input type="text" name="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="article name" defaultvalue={news.title}/>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
              <label htmlFor="synopsis">synopsis:</label>
              <input type="text" name="synopsis" onChange={handleControlledInputChange} className="form-control" placeholder="synopsis" defaultvalue={news.synopsis}/>
              </div>
            </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="url">url:</label>
              <input type="text" name="url" onChange={handleControlledInputChange} className="form-control" placeholder="url" defaultvalue={news.url}/></div>
          </fieldset>
          {/* <fieldset>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" name="url" onChange={handleControlledInputChange} className="form-control" placeholder="date" defaultvalue={news.date}/></div>
          </fieldset> */}
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() 
              handleSaveNews()
            }}>
          {newsId ? <>Save Article</> : <>Add Article</>}</button>
        </form>
      )
  }

