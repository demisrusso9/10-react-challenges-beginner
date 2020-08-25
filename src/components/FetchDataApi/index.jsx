import React, { useEffect, useState } from "react";
import "./style.css";

function FetchApi() {
    const api = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const [books, setBooks] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(api);
            const data = await res.json();
            setBooks(data);
        }

        document.querySelector('.fetch-button').addEventListener('click', () => {
            fetchData()
        })
    }, [])

    // function fetchBooks() {
    //     fetch(api)
    //         .then(resp => resp.json())
    //         .then(data => setBooks(data))
    //         .catch(err => console.error('Mistakes were made by the developer', err))
    // }

    return (
        <div className="App">
            <h1>Game of Thrones Books</h1>
            <h2>Fetch a list from an API and display it</h2>

            <button className="fetch-button" >Fetch Data</button>

            <div className="books">
                {books && books.map((book, i) => {

                    const authors = book.authors.join(', ')
                    const time = new Date(book.released).toDateString()

                    return (
                        <div className="book" key={i}>
                            <h3>Book Number: {i + 1}</h3>
                            <h2>Book Name: {book.name}</h2>

                            <div className="details">
                                <p>👨: {authors}</p>
                                <p>📖: {book.numberOfPages}</p>
                                <p>🏘️: {book.country}</p>
                                <p>⏰: {time}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FetchApi
