import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';


const AdminUsers = () => {

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
        let id = user.id

        let body = {
            userId: id
        }

        await axios.post('http://localhost:3001/users/delete', body, {headers:{'authorization':'Bearer ' + token}})

        window.location.reload();

    }

    if (props.credentials?.user.isAdmin === true) {
        return (

            <div className="adminUsersContainer">
                <div className="UsersContent">
                    {allusers.map((user, index) => (
                        <div key={index} className="UserCards">
                            <p>Name: {user.firstname}</p>
                            <p>Lastname: {user.lastname}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Birthday: {user.birthday}</p>
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
