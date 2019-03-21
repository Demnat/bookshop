import React from 'react';
import Price from './Price';
import { Link } from 'react-router-dom';

const BookItem = ({book}) => (
    
    <div className={'homeBook'}>
        { 
            book.tag !== "" && <span className={'token'}>{book.tag}</span>
        }
        <Link to={'/product/' + book.id} className={'bookContainer'}>
            <img className={'book'}
                    src={book.imageCover}
                    alt={book.title} />
        </Link>
        <h4 className={'bookTitle'}>{book.title}</h4>
        <h5 className={'bookAutor'}>{book.autor}</h5>
        <span className={'bookPrice'}><Price price={book.price} /></span>
    </div>
)

export default BookItem;