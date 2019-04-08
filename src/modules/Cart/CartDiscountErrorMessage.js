import React from 'react';

const CartDiscountErrorMessage = (props) => (
    
    <React.Fragment>
        {(() => {
            console.log(props);
            if (props.discount == undefined || props.discount.isValid === undefined || props.discount.isValid) {
                    return null;
                } 
                return (
                    <p className="discountErrorMessage">
                        {props.discount.errorMessage}
                    </p>
                )
        })()}
    </React.Fragment>
);

export default CartDiscountErrorMessage;