import React from 'react'
import "./Book.css";
const Book = ({image, author, title}) => {
    return (
        <div className="book">
            <img src={image} alt="" className="img"/>
            <h1>{title  }</h1>
            <p>{author}</p>
        </div>
    )
}

export default Book
