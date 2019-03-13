import React from 'react';
import BookItem from './BookItem';

const BooksList = ({books}) => {
    console.log(books);

    return (
    <div className="container homeSection-booksContainer">
        {
            
            books.map(book => <BookItem key={book.id} book={book}/>)
        }
    </div>
    );
}

export default BooksList;