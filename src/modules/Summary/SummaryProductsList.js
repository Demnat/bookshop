import React from 'react';
import SummaryItem from './SummaryItem';

const SummaryProductsList = (props) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
                    <p className="bookDescription cartSection-columnData">Produkt</p>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <p className="bookDescription cartSection-columnData">Ilość sztuk</p>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <p className="bookDescription cartSection-columnData">Cena</p>
                </div>
            </div>   
            {
                props.products.map(item => <SummaryItem 
                                                key={item.book.id} 
                                                item={item.book} 
                                                itemAmount={item.bookAmount} 
                                                itemsPrice={item.booksPrice}
                                                itemsOldPrice={item.oldBooksPrice} 
                                            />)
            }
        </div>

    );
}

export default SummaryProductsList;