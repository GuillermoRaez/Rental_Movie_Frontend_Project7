import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card } from 'antd';



const AdminOrders = (props) => {

    const [allorders, setAllOrders] = useState([]);

    useEffect(() => {
        findAllUserOrders();
    }, []);

    useEffect(()=> {

    })

    const findAllUserOrders = async () => {

        let token = props.credentials?.token;

        let res = await axios.get('http://localhost:3001/orders', {headers:{'authorization':'Bearer ' + token}});

        setAllOrders(res.data);
    }

    const deleteOrder = async (allorders) => {

        let token = props.credentials?.token;

        let body = {
            userId: body.id,
            id: body.id
        }

        await axios.post('http://localhost:3001/orders/delete', body, {headers:{'authorization':'Bearer ' + token}});

        window.location.reload();

    }

    if(props.credentials?.user.isAdmin === true) {

        return(
            <div className="AdminOrdersContainer">
                <div className="adminInfo">
                    <h1>Something is not adding up here!</h1>
                    <p>Find the root of the issue</p>
                    <div className="orderBoxes">
                    {allorders.map((order, index) => (
                        <Card key={index} className="OrderCards">
                            <div onClick={() => deleteOrder(order)} className="delete">Delete</div>
                            <p>User: {order.userId}</p>
                            <p>MovieId: {order.movieId}</p>
                            <p>Movie: {order.movieTitle}</p>
                            <p>Rented: {order.createdAt}</p>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
        <div>
            You are not Authorized!
        </div>
        )
    }
}

export default connect((state) => ({
    credentials: state.credentials,
}))(AdminOrders);
