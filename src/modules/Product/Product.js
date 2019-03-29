import React from 'react';
import Price from '../Home/Price';
import { Link } from 'react-router-dom';



const Product = (props) => (

    <section className="container productSection">
    <div className="row">
        <div className="col-sm-12 col-md-9 col-lg-10 col-xl-10">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                    {/* <!-- okładka + link do fragmentu książki na pozniej --> */}
                    <div className="homeBook productSection-coverContainer">
                        <a href="#" className="bookContainer">
                            <img className="book"
                                src={props.selectedBook.imageCover}
                                alt={props.selectedBook.title} />
                        </a>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9">
                    {/* <!-- Dane --> */}
                    <div className="row">
                        {/* <!-- tytuł, autor, później gwiazdki --> */}
                        <div className="container productSection-mainBookDataContainer">
                            <h2 className="productBookTitle">{props.selectedBook.title}</h2>
                            <a href="#" className="productBookAutor">{props.selectedBook.autor}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            {/* <!-- dane książki : seria, oprawa, ilość stron --> */}
                            <div className="container productSection-physicalBookDataContainer">
                                <div className="dataContainer">
                                    <p className="labelData">Seria</p>
                                    <p className="data">{props.selectedBook.series}</p>
                                    {/* <!-- zrobić z tego link później --> */}
                                </div>
                                <div className="dataContainer">
                                    <p className="labelData">Tom</p>
                                    <p className="data">{props.selectedBook.tome}</p>
                                </div>
                                <div className="dataContainer">
                                    <p className="labelData">Oprawa</p>
                                    <p className="data">{props.selectedBook.binding}</p>
                                </div>
                                <div className="dataContainer">
                                    <p className="labelData">Ilość stron</p>
                                    <p className="data">{props.selectedBook.pages}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            {/* <!-- dane wydawnictwa + ogólne: rok wydania, data premiery --> */}
                            <div className="container productSection-publisherBookDataContainer">
                                <div className="dataContainer">
                                    <p className="labelData">Wydawnictwo</p>
                                    <p className="data">{props.selectedBook.publisher}</p>
                                    {/* <!-- zrobić z tego link później --> */}
                                </div>
                                <div className="dataContainer">
                                    <p className="labelData">Rok wydania</p>
                                    <p className="data">{props.selectedBook.editionYear}</p>
                                </div>
                                <div className="dataContainer">
                                    <p className="labelData">Data premiery</p>
                                    <p className="data">{props.selectedBook.premiereDate}</p>
                                </div>
                                <div className="dataContainer">
                                    <p className="labelData">Wydanie</p>
                                    <p className="data">{props.selectedBook.edition}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <!-- tabsy: Opis, Szczegóły, Recenzje --> */}
                <p className="bookDescription">{props.selectedBook.description}</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
            {/* <!-- do kosza --> */}
            <div className="productSection-priceDataContainer">
                <p className="labelData productSection-priceDataContainer-labelData">Cena</p>
                <p className="productPrice"><Price price={props.selectedBook.price} /></p>
            </div>
            {/* <Link to={'/cart/' + selectedBook.id} className="toCart">Dodaj do koszyka</Link> */}
            <button className="toCart" onClick={() => props.addItemToCart(props.selectedBook)} >Dodaj do koszyka</button>
        </div>
    </div>
</section> 

)

export default Product;