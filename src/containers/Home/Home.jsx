import React from 'react';
import Popular from '../../components/Popular/Popular';
import TopRated from '../../components/TopRated/TopRated';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
            <div className="vistaHome">
                <Navbar/>
                <Popular/>
                <TopRated/>
            </div>
    )
}

export default Home;
