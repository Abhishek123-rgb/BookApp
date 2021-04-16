import React, {useEffect, useState} from 'react'
import Book from './components/Book';
import Header from './components/Header'

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
        <div>
            <Header/>
            {books.map(book => (
                <Book
                image={book.volumeInfo.imageLinks.smallThumbnail}
                author={book.volumeInfo.authors}
                title={book.volumeInfo.readingModes.title}
                 />
            ))}
        </div>
    )
}

export default App
