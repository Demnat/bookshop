import React from 'react';

const Cart = () => 

<section class="container cartSection">
    <h6 class="leftNavBarHeader cartSection-header">Koszyk</h6>
    <div class="row">
        <div class="col-sm-12 col-md-7 col-lg-8 col-xl-8">
            <p class="bookDescription cartSection-columnData">Produkt</p>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <p class="bookDescription cartSection-columnData">Ilość sztuk</p>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-1 col-xl-1">
            <p class="bookDescription cartSection-columnData">Cena</p>
        </div>
        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1">
            <p class="bookDescription cartSection-columnData">Usuń</p>
        </div>
    </div>
    <div class="row cartSection-productData">
        <div class="col-sm-12 col-md-2 col-lg-1 col-xl-1">
            <img class="book cartSection-productData-cover"
                src="http://www.initium.pl/imgcache/?file=/Ksiazki/Corka%20Krwawych/Co%CC%81rka_2015_okladka.jpg&width=185&height=260"
                alt="Córka krwawych - Anne Bishop" />
        </div>
        <div class="col-sm-12 col-md-5 col-lg-7 col-xl-7">
            <h4 class="bookTitle">Córka krwawych</h4>
            <h5 class="bookAutor">Anne Bishop</h5>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <div class="container amountItem">
                <input class="amount" type="number" min="1" max="999" />
                <div class="amountButtons">
                    <button class="amountButton">+</button>
                    <button class="amountButton">-</button>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-1 col-xl-1">
            <p class="bookPrice cartSection-productData-price">39,99 zł</p>
        </div>
        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1">
            <a href="#" class="footerMenuLink"><i class="far fa-trash-alt removeProduct"></i></a>
        </div>
    </div>
    <div class="row cartSection-productData">
        <div class="col-sm-12 col-md-2 col-lg-1 col-xl-1">
            <img class="book cartSection-productData-cover"
                src="http://www.initium.pl/imgcache/?file=/Ksiazki/Corka%20Krwawych/Co%CC%81rka_2015_okladka.jpg&width=185&height=260"
                alt="Córka krwawych - Anne Bishop" />
        </div>
        <div class="col-sm-12 col-md-5 col-lg-7 col-xl-7">
            <h4 class="bookTitle">Córka krwawych</h4>
            <h5 class="bookAutor">Anne Bishop</h5>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <div class="container amountItem">
                <input class="amount" type="number" min="1" max="999" />
                <div class="amountButtons">
                    <button class="amountButton">+</button>
                    <button class="amountButton">-</button>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-md-2 col-lg-1 col-xl-1">
            <p class="bookPrice cartSection-productData-price">39,99 zł</p>
        </div>
        <div class="col-sm-12 col-md-1 col-lg-1 col-xl-1">
            <a href="#" class="footerMenuLink"><i class="far fa-trash-alt removeProduct"></i></a>
        </div>
    </div>
    <div class="row container cartSection-summary">
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <form class="discount">
                <h4 class="bookTitle">Kod rabatowy:</h4>
                <input type="text" class="discountCode" />
                <button class="discountButton" type="submit">Zastosuj</button>
            </form>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-8 col-xl-8">
            <div class="row shoppingWorth">
                <h4 class="bookTitle shoppingWorth-header">Wartość zakupów:</h4>
                <p class="bookPrice cartSection-productData-price">39,99 zł</p>
            </div>
            <div class="row shoppingWorth">
                <h4 class="bookTitle shoppingWorth-header">Koszty dostawy:</h4>
                <p class="bookPrice cartSection-productData-price">9,99 zł</p>
            </div>
        </div>
    </div>
    <div class="container cartSection-pay">
        <div class="row shoppingWorth">
            <h4 class="bookTitle shoppingWorth-header">Do zapłaty:</h4>
            <p class="bookPrice cartSection-productData-price">9,99 zł</p>
        </div>
        <button class="payButton" type="submit">Zapłać</button>
    </div>
</section> ;

export default Cart;