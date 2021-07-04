import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { identifier } from '@babel/types';
import orderReducer from '../../redux/reducers/order-reducer';


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
            userId: id,
            id: order.id
        }

        await axios.post('http://localhost:3001/orders/delete', body, {headers:{'authorization':'Bearer ' + token}});

        window.location.reload();

    }

    if(props.credentials?.user.isAdmin === true) {

        return(
            <div className="AdminOrdersContainer">
                <div className="adminInfo allUsersContent">
                    {allorders.map((order, index) => (
                        <div key={index} className="OrderCards">
                            <div onClick={() => deleteOrder(order)} className="deletebutton"></div>
                            <p>User: {allorders.userId}</p>
                            <p>Movie: {allorders.movieId},{allorders.movieTitle}</p>
                            <p>Rented: {allorders.createdAt}</p>
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
