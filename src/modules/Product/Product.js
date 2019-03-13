import React from 'react';

const Product = (book) => (

    <section class="container productSection">
    <div class="row">
        <div class="col-sm-12 col-md-9 col-lg-10 col-xl-10">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                    {/* <!-- okładka + link do fragmentu książki --> */}
                    <div class="homeBook productSection-coverContainer">
                        <a href="#" class="bookContainer">
                            <img class="book"
                                src="http://www.initium.pl/imgcache/?file=/Ksiazki/Corka%20Krwawych/Co%CC%81rka_2015_okladka.jpg&width=185&height=260"
                                alt="Córka krwawych - Anne Bishop" />
                        </a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 col-xl-9">
                    {/* <!-- Dane --> */}
                    <div class="row">
                        {/* <!-- tytuł, autor, później gwiazdki --> */}
                        <div class="container productSection-mainBookDataContainer">
                            <h2 class="productBookTitle">Córka krwawych</h2>
                            <a href="#" class="productBookAutor">Anne Bishop</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            {/* <!-- dane książki : seria, oprawa, ilość stron --> */}
                            <div class="container productSection-physicalBookDataContainer">
                                <div class="dataContainer">
                                    <p class="labelData">Seria</p>
                                    <p class="data">Trylogia Czarnych Kamieni</p>
                                    {/* <!-- zrobić z tego link później --> */}
                                </div>
                                <div class="dataContainer">
                                    <p class="labelData">Tom</p>
                                    <p class="data">1</p>
                                </div>
                                <div class="dataContainer">
                                    <p class="labelData">Oprawa</p>
                                    <p class="data">Miękka</p>
                                </div>
                                <div class="dataContainer">
                                    <p class="labelData">Ilość stron</p>
                                    <p class="data">448</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            {/* <!-- dane wydawnictwa + ogólne: rok wydania, data premiery --> */}
                            <div class="container productSection-publisherBookDataContainer">
                                <div class="dataContainer">
                                    <p class="labelData">Wydawnictwo</p>
                                    <p class="data">Initium</p>
                                    {/* <!-- zrobić z tego link później --> */}
                                </div>
                                <div class="dataContainer">
                                    <p class="labelData">Rok wydania</p>
                                    <p class="data">2018</p>
                                </div>
                                <div class="dataContainer">
                                    <p class="labelData">Data premiery</p>
                                    <p class="data">15.10.2015</p>
                                </div>
                                <div class="dataContainer">
                                    <p class="labelData">Wydanie</p>
                                    <p class="data">II</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* <!-- tabsy: Opis, Szczegóły, Recenzje --> */}
                <p class="bookDescription">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
                    pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
                    Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a,
                    convallis ac, laoreet enim. Phasellus fermentum in, dolor. Lorem ipsum dolor sit amet enim.
                    Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus
                    felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum
                    commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Lorem ipsum dolor
                    sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada
                    elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta
                    urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim.</p>
            </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-2 col-xl-2">
            {/* <!-- do kosza --> */}
            <div class="productSection-priceDataContainer">
                <p class="labelData productSection-priceDataContainer-labelData">Cena</p>
                <p class="productPrice">39,99 zł</p>
            </div>
            <a href="#" class="toCart">Dodaj do koszyka</a>
        </div>
    </div>
</section> 

)

export default Product;