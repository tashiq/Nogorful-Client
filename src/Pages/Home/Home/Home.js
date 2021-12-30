import React from 'react';
import Banner from '../Banner/Banner';
import Branches from '../Branches/Branches';
import Events from '../Events/Events';
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/Navigation/Navigation'
const Home = () => {

    return (
        <div>
            <Navigation />
            <Banner />
            <Branches />
            <Events />
            <Footer />
        </div>
    );
};

export default Home