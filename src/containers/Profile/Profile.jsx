import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Userdata from '../../components/Userdata/Userdata';

const Profile = () => {
    return (
    <div>
        <Navbar/>
        <div className="vistaProfile">
            <Userdata/>
            Estamos en Profile
        </div>
    </div>
    )
}

export default Profile