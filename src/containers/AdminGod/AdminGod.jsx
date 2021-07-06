import React from 'react';
import { connect } from "react-redux";
import Sender from '../../components/Sender/Sender';


const AdminGod = (props) => {

    if (props.credentials?.user.isAdmin === true) {

        return(
            <div className="adminViewContainer">
                <div className="adminViewContent">
                    <div className="adminBoard">
                        <p className="SelfLove">Welcome Home, Lord {props.credentials?.user.firstname}!</p>
                        <p className="SelfLoathing">What would you like to do, today?</p>
                    </div>
                    <div className="adminBody">
                        <Sender path="/allusers" destination="All Users">Users</Sender>
                        <Sender path="/allorders" destination="All Orders">Orders</Sender>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <h1>Something is fishy!</h1>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
}))(AdminGod);
