import React from 'react';
import Price from '../Home/Price';

const CartItem = (props) => {
    return (

        <div className="row cartSection-productData">
            <div className="col-sm-12 col-md-2 col-lg-1 col-xl-1">
                <img className="book cartSection-productData-cover"
                    src={props.item.imageCover}
                    alt={props.item.title} />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-7 col-xl-7">
                <h4 className="bookTitle">{props.item.title}</h4>
                <h5 className="bookAutor">{props.item.autor}</h5>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <div className="container amountItem">
                    <input className="amount" type="number" min="1" max="999" value={props.itemAmount} />
                    <div className="amountButtons">
                        <button className="amountButton">+</button>
                        <button className="amountButton">-</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-1 col-xl-1">
                {/* cena do wyliczenia w zależności od ilości - wyliczona w reducerze*/}
                <p className="bookPrice cartSection-productData-price"><Price price={props.itemsPrice} /></p>  
            </div>
            <div className="col-sm-12 col-md-1 col-lg-1 col-xl-1">
                {/* poprawić style z a na button */}
                <button className="footerMenuLink"><i class="far fa-trash-alt removeProduct"></i></button>
            </div>
        </div>
        
    );
}

export default CartItem;