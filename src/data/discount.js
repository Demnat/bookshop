const discounts =
[
    {
        code: 'percent10',
        lowering: 'all',
        value: 0.1,
        invokeFunction: reduceCartByPercent,
        availableForCart: availableForCart
    },
    {
        code: 'percent20',
        value: 0.2,
        invokeFunction: reduceCartByPercent,
        availableForCart: availableForCart
    },
    {
        code:'item1_20',
        value:0.2,
        availableForIDs: [2, 5, 11],
        invokeFunction: reduceSelectedCartItems,
        availableForCart: availableForCartItem
    },
    {
        code:'packages',
        minSummaryPrice: 300,
        invokeFunction: reducePackageCosts,
        availableForCart: availableToReducePackageCosts
    }
]

function availableForCartItem(cart, discount)
{
    let errorMessage = isAlreadyUsed(cart, discount);
    if (!errorMessage.length)
    {
        if (!(cart.products).some((cartItem, index, array) =>
             discount.availableForIDs.find(id => id === cartItem.book.id) !== undefined))
        return "W koszyku nie masz produktów objętych rabatem";
    }
    return errorMessage;
}

function availableForCart(cart, discount)
{
    let errorMessage = isAlreadyUsed(cart, discount);
    return errorMessage;
}

function availableToReducePackageCosts(cart, discount)
{
    let errorMessage = isAlreadyUsed(cart, discount);
    if (!errorMessage.length)
    {
        console.log(discount);
        if (cart.summary.price < discount.minSummaryPrice)
        {
           return "Wartość koszyka nie przekroczyła wymaganej kwoty";
        }
    }
    return errorMessage;
}

function isAlreadyUsed(cart, discount)
{
    if (cart.discount !== null && cart.discount.code === discount.code)
    {
        return "Kod już został wykorzystany";
    }
    else
    {
        return "";
    }
}

function reduceCartByPercent(cart, discount){
    cart.products.map(product => {
        product.oldBooksPrice = product.book.price * product.bookAmount;
        product.booksPrice = product.oldBooksPrice * (1 - discount.value);
        return product;
    });
    cart.discount = {...cart.discount, code: discount.code};
    return cart;
}

function reduceCartByValue(cart, discount){
    cart.products.map(product => {
        product.oldBooksPrice = product.book.price * product.bookAmount;
        product.booksPrice = product.oldBooksPrice - discount.value;
        return product;
    });
    cart.summary.postingPrice = 13.99;
    cart.discount = {...cart.discount, code: discount.code};
    return cart;
}

function reduceSelectedCartItems(cart, discount){
    cart.discount = {...cart.discount,code:discount.code};
    cart.products.forEach(item => {
        if (discount.availableForIDs.some(id => id === item.book.id))
        {
            item.oldBooksPrice = item.book.price * item.bookAmount;
            item.booksPrice = item.oldBooksPrice * (1 - discount.value);
        }
    });
    cart.summary.postingPrice = 13.99;
    return cart;
}

function reducePackageCosts(cart, discount)
{
    cart.summary.postingPrice = 0;
    cart.products.map(product => {
        product.oldBooksPrice = product.book.price * product.bookAmount;
        product.booksPrice = product.oldBooksPrice;
        return product;
    });
    cart.discount = {...cart.discount, code: discount.code};
    return cart;
}

export function isValidCodeForCart(code, cart)
{
    const foundDiscount = discounts.find(discount => discount.code === code);
    const errorMessage = foundDiscount !== undefined ? foundDiscount.availableForCart(cart,foundDiscount): "Podano niewłaściwy rabat";
    cart.discount = {
        isValid: errorMessage.length === 0,
        errorMessage:errorMessage
    }
    
    return cart;
}

export function addDiscountToCart(code, cart)
{
    const discount = discounts.find(f => f.code === code);
    return discount.invokeFunction(cart, discount);
}

export function resetDiscountCart(cart)
{
    cart.products.map(product => {
        product.oldBooksPrice = product.book.price * product.bookAmount;
        product.booksPrice = product.oldBooksPrice;
        return product;
    });
    cart.discount = null;
    return cart;
}