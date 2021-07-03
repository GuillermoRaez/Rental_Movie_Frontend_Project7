import React from 'react';
import Popular from '../../components/Popular/Popular';
import TopRated from '../../components/TopRated/TopRated';
import Upcoming from '../../components/Upcoming/Upcoming';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
            <div className="vistaHome">
                <Navbar/>
                <Popular/>
                <TopRated/>
                <Upcoming/>
            </div>
    )
}

export default Home;
