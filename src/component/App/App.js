import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import Home from '../Hero/Home'
import List from './../List/List'
import Footer from './../Footer/Footer'


const App = () => {
    return (
        <div className="component">
            <Header />
            <Home />
            <List />
            <Footer />
        </div>
    );
}

export default App;
