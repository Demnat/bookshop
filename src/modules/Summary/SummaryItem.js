import React from 'react';
import Price from '../Home/Price';

const SummaryItem = (props) => {
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
                    <input className="amount" type="number" min="1" max="999" 
                        value={props.itemAmount} 
                        disabled
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                <p className="bookPrice cartSection-productData-price">
                    <Price price={props.itemsPrice} />
                    {(props.itemsOldPrice !== props.itemsPrice)&&<sub className="bookPrice--oldPrice"><br /><Price price={props.itemsOldPrice} /></sub>}
                </p>  
            </div>
        </div>
        
    );
}

export default SummaryItem;