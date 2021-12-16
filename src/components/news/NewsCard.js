import React from "react";
import { Link } from "react-router-dom"
import "./News.css"
import moment from "moment";


// const sortedArray = news.date.sort((a, b) => a.diff(b))
// 
//filter



export const NewsCard = ({ news }) => {
    if (news.userId === +localStorage.activeUser){
    }
    return (
    <section className="news">
        <h3><Link to={`/news/detail/${news.id}`}>{news.title}
            </Link></h3>
        <div className="news-title">{news.title}</div>
        <div className="news-synopsis">{news.synopsis}</div>
        <div className="news-url">{news.url}</div>
        <div className="dates">Date of the article saved: {moment(news.date).format('MMMM Do YYYY')}
        </div>
    </section>
)}

