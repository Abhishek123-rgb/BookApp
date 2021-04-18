import React, {useEffect, useState} from 'react'
import Book from './components/Book';
import "./App.css";
const App = () => {

    const [books, setBooks] = useState([])

    useEffect(()=>{
        getBooks();
    },[]);

    const getBooks = async () =>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms`);
        const data = await response.json();
        setBooks(data.items);
        console.log(data);
    }


    return (
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text" placeholder="Search Book"/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div>
                <div className="abcd">
                    {books.map(book => (
                        <Book
                        image={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors}
                        title={book.volumeInfo.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
