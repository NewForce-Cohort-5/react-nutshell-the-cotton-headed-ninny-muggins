import React from "react";
import { Link } from "react-router-dom"

export const NewsCard = ({ news }) => (
    <section className="news">
        <h3 className="news-header">

        </h3>
        <div className="news-title">{news.title}</div>
        <div className="news-synopsis">{news.synopsis}</div>
        <div className="news-url">{news.url}</div>
    </section>
)