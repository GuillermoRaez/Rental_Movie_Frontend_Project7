import React from 'react';
import { connect } from "react-redux";
import Sender from '../../components/Sender/Sender';


const AdminView = (props) => {

    if (props.credentials?.user.isAdmin === true) {

        return(
            <div className="adminViewContainer">
                <div className="adminViewContent">
                    <div className="adminBoard">
                        <p className="SelfLove">Welcome Home, Lord {props.credentials?.user.firstname}!</p>
                        <p className="SelfLoathing">What would you like to do, today?</p>
                    </div>
                    <div className="adminBody">
                        <Sender path="/allusers" destination="All Users"/>
                        <Sender path="/allorders" destination="All Orders"/>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default AdminView
