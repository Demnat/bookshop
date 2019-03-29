import React from 'react';
import CartItem from './CartItem';

const CartProductsList = ({products}) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
                    <p className="bookDescription cartSection-columnData">Produkt</p>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <p className="bookDescription cartSection-columnData">Ilość sztuk</p>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-1 col-xl-1">
                    <p className="bookDescription cartSection-columnData">Cena</p>
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1 col-xl-1">
                    <p className="bookDescription cartSection-columnData">Usuń</p>
                </div>
            </div>   
            {
                products.map(item => <CartItem key={item.book.id} item={item.book} itemAmount={item.bookAmount} itemsPrice={item.booksPrice} />)
            }
        </div>

    );
}

export default CartProductsList;