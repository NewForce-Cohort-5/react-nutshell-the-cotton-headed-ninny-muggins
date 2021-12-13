import React, { useContext, useEffect, useState} from "react";
import { NewsContext } from "./NewsProvider";
import { NewsCard } from "./NewsCard";
import { useNavigate } from "react-router"

export const NewsList = () => {

    const { news, getNews } = useContext(NewsContext)

    const navigate = useNavigate()
    
    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className="news">
            <button onClick={() => navigate("/news/create")}>Add Article</button>
        </div>
    )
}