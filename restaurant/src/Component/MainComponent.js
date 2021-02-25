import React from 'react';
import Body from './body/body';
import Header from './header/header';
import Footer from './footer/footer';

const MainComponent = () => {
    return (
        <div className="main-container">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default MainComponent;