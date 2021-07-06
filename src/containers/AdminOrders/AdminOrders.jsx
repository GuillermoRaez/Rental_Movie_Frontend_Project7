import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import moment from 'moment';



const AdminOrders = (props) => {

    const [allorders, setAllOrders] = useState([]);

    const baseImgUrl = "https://image.tmdb.org/t/p";
    const sizePoster = "w200";

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
                    <h1 className="usersh1">All Orders</h1>
                    <div className="orderBoxes">
                    {allorders.map((order, index) => (
                        <div key={index} className="OrderCards">
                            <div onClick={() => deleteOrder(order)} className="delete">Cancel</div>
                            <img className="poster_path" src={`${baseImgUrl}/${sizePoster}${order.moviePoster}`} alt="poster"></img>
                            <p>User: {order.userId}</p>
                            <p>MovieId: {order.movieId}</p>
                            <p>Movie: {order.movieTitle}</p>
                            <p>Rented: {moment(order.createdAt).format("LL")}</p>
                        </div>
                    ))}
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
