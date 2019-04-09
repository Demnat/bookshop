import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainLayout } from './modules/MainLayout/MainLayout';
import Home from './modules/Home/HomeContainer';
import ProductContainer from './modules/Product/ProductContainer';
import FAQ from './components/FAQ';
import Rules from './components/Rules';
import Contact from './components/Contact';
import CartContainer from './modules/Cart/CartContainer';
import Summary from './modules/Summary/Summary';
import NotFound from './components/NotFound';

import './sass/style.scss';

import store from './store';
import { Provider } from 'react-redux';


class App extends React.Component {

    render() {
        return (

            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/:sortBy/:sortDirection/:currentPage'} component={Home} />     
                        <Route exact path={'/product/:bookId'} component={ProductContainer} /> 
                        <Route exact path={'/faq'} component={FAQ} />
                        <Route exact path={'/rules'} component={Rules} />
                        <Route exact path={'/contact'} component={Contact} />
                        <Route exact path={'/cart'} component={CartContainer} />
                        <Route exact path={'/summary'} component={Summary} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </MainLayout>
            </BrowserRouter>

        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
);


