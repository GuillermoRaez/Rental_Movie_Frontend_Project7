import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';
import moment from 'moment';


const AdminUsers = (props) => {

    let history = useHistory();

    const [allusers, setAllUsers] = useState([]);

    useEffect(() => {

        findAllUsers();
    }, []);

    useEffect(() => {

    });

    const findAllUsers = async () => {
        try {

            let token = props.credentials?.token;

            let res = await axios.get('http://localhost:3001/users', {headers: {'authorization':'Bearer ' + token}});

            setAllUsers(res.data)

        } catch (error) {

            console.log(error);
        }

    }

    const deleteUser = async (user) => {

            let token = props.credentials?.token;
            let id = user.id;
    
            let body = {
                userId : id
            }
    
            await axios.post('http://localhost:3006/users/deleteuser', body, {headers:{'authorization':'Bearer ' + token}})
    
            window.location.reload();
    
        }


    if (props.credentials?.user.isAdmin === true) {
        return (
            <div className="adminUsersContainer">
                <h1 className="usersh1">Users</h1>
                <div className="UsersContent">
                    {allusers.map((user, index) => (
                        <div key={index} className="UserCards">
                            <div onClick={() => deleteUser(user)} className="delete">Delete</div>
                            <p>Id: {user.id}</p>
                            <p>Name: {user.firstname}</p>
                            <p>Lastname: {user.lastname}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Birthday: {moment(user.birthday).format("LL")}</p>
                            <p>Address: {user.address}</p>
                        </div>
                    ))}

                </div>
            </div>
        )

    } else {
        return (
            <div>
                You are not an Admin!
            </div>
        )
    }
}


export default connect((state) => ({
    credentials: state.credentials,
}))(AdminUsers);
