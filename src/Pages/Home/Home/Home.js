import React from 'react';
import Attendance from '../../Attendance/Attendance';
import Banner from '../Banner/Banner';
import Branches from '../Branches/Branches';
import Events from '../Events/Events';
const Home = () => {

    return (
        <div>
            <Attendance />
            <Banner></Banner>
            <Branches></Branches>
            <Events></Events>
        </div>
    );
};

export default Home;