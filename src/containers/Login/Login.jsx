import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types'

const Login = (props) => {

    let history = useHistory();

   //Hooks
   const [credentials, setCredentials] = useState({email:'',password:''});
   const [msgError, setMensajeError] = useState('');

   //Handlers
   const updateCredentials = (e) => {
       setCredentials({...credentials,[e.target.name]: e.target.value})
   }

   const checkError = async (arg) => {

    switch (arg){

        case 'email':

            if (credentials.email.length < 1){
                setMensajeError({...msgError, eEmail: "Please enter your email"});
            }else {
                setMensajeError({...msgError, eEmail: ""});
            }

        break;

        case 'password':

            if (credentials.password.length < 1){
                setMensajeError({...msgError, ePassword: "Please enter your password"});
            }else {
                setMensajeError({...msgError, ePassword: ""});
            }
        break;

        default:
            break;
    }
}


   const logMe = async () => {
    

    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
        setMensajeError('Please introduce a valid email.');
        return;
   }

        let body = {
            email: credentials.email,
            password: credentials.password,
        }
        
            try {let res = await axios.post('http://localhost:3001/login', body);

            let data = { 
            token: res.data.token,
            user: res.data.user,
            idUser: res.data.user._id
            }

            //Redux
            props.dispatch({type:LOGIN,payload:data});

            setTimeout(()=> {
            
                history.push("/profile");
    
            }, 750);
        } catch (err) {
            setMensajeError("Credentials are not correct!")
        }

        }

    return (
        <div className="vistaLogin">
                <label>Email:</label>
                <input className="inputBase"  type='email' name='email' title='email' placeholder="Email" onBlur={checkError} onChange={updateCredentials}  length='30'/>
                <label>Password:</label>
                <input className="inputBase"  type='password'  name='password' title='password' placeholder="Password" onBlur={checkError} onChange={updateCredentials}  length='30'/>
                <div className="sendButton" onClick={()=>logMe()}>Login</div>
                <div>{msgError}</div>
        </div>
    )
}

export default connect()(Login);