import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import { MOVIE } from '../../redux/types';
import { Card } from 'antd';
import moment from 'moment';


const UserOrder = (props) => {
    
    let history = useHistory()

    const baseImgUrl = "https://image.tmdb.org/t/p";
    const sizePoster = "w200";

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {

        findAllOrders();

// eslint-disable-next-line         
    },[]);

    useEffect(() => {

    });

    const deleteOrder = async (order) => {

        let token = props.credentials?.token;
        let id = props.credentials?.user.id;

        let body = {
            userId : id,
            id : order.id
        }

        await axios.post('http://localhost:3001/orders/delete', body, {headers:{'authorization':'Bearer ' + token}})

        window.location.reload();

    }

    const findAllOrders = async () => {

        let token = props.credentials?.token;

        let body = {
            userId : props.credentials?.user.id
        }

        let res = await axios.post('http://localhost:3001/orders/user', body , {headers:{'authorization':'Bearer ' + token}});  

        setOrders(res.data)

    }

    const getFilmInfo = async (film) => {

        let id = film.movieId

        let res = await axios.get('http://localhost:3001/movies/searchid/' + id)

        props.dispatch({ type: MOVIE, payload: res.data });

        history.push("/filminfo");
    }


    if (props.credentials?.user && orders.length > 0) {

        return(
            <div className="userOrderContainer">
                <h1 className="meOrders">My Orders</h1>
                <div className="userOrdersContent">
                
                        {orders.map((order, index) => {
                            return (
                            <div key={index} className="AllOrderCards">
                                <div onClick={() => deleteOrder(order)} className="delete">Delete</div> 
                                <img className="poster_path" src={`${baseImgUrl}/${sizePoster}${order.moviePoster}`} alt="poster"></img>
                                <p className="movierented">Movie ID:{order.movieId}</p>
                                <p className="movierented">Movie:{order.movieTitle}</p>
                                <p className="movierented">Rented:{moment(order.createdAt).format("LL")}</p>
                            </div>
                        )})}
                    
                </div>
            </div>
        )

    } else if (props.credentials?.user && orders.length <= 0){

        return (
            <div className="userOrderContainer">
                
                <div className="userOrdersEmpty">
                    
                    <h1>You can start adding movies to your list!</h1>
                    <h2>Visit the <a href="/">HOME PAGE</a> or <a href="/search">SEARCH</a> for a title.</h2>
                    
                </div>
            </div>
        )    


    } else {
        return (
            <div>
                Something is not right here!
            </div>
        )
    }
}

export default connect((state)=> ({
    credentials: state.credentials,
}))(UserOrder);
