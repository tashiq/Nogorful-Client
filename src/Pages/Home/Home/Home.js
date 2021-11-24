import React from 'react';
import Banner from '../Banner/Banner';
import Branches from '../Branches/Branches';
import Events from '../Events/Events';
import Info from '../Info/Info';
import EventsPage from '../../EventsPage/EventsPage'
const Home = () => {

    return (
        <div>
            <EventsPage />
            <Banner></Banner>
            <Info></Info>
            <Branches></Branches>
            <Events></Events>
        </div>
    );
};

export default Home;