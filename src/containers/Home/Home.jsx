import React from 'react';
import Popular from '../../components/Popular/Popular';
import TopRated from '../../components/TopRated/TopRated';
import Upcoming from '../../components/Upcoming/Upcoming';

const Home = () => {
    return (
            <div className="vistaHome">
                <Popular/>
                <TopRated/>
                <Upcoming/>
            </div>
    )
}

export default Home;
