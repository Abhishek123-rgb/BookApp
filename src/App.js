import React, {useEffect, useState} from 'react'
import Book from './components/Book';
import "./App.css";
const App = () => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(()=>{
        getBooks();
    },[query]);

    const getBooks = async () =>{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms`);
        const data = await response.json();
        setBooks(data.items);
        console.log(data);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setQuery(search);
    }


    return (
        <div className="App">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-bar" type="text" value="search" placeholder="Search Book" onChange={e => setSearch(e.target.value)}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div>
                <div className="abcd">
                    {books.filter((val)=>{
                        if(search === "")
                        {
                            return val;
                        }else if(val.volumeInfo.title.toLowerCase().includes(search.toLocaleLowerCase())){
                            return val;
                        }
                    }).map(book => (
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
