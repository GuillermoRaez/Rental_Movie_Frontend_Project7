import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Sender from '../../components/Sender/Sender';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types'

const Login = (props) => {

    let history = useHistory();

   //Hooks
   const [credentials, setCredentials] = useState({email:'',password:''});
   const [msgError, setMensajeError] = useState({eEmail:'',ePassword: '',eValidate:''});

   //Handlers
   const updateCredentials = (e) => {
       setCredentials({...credentials,[e.target.name]: e.target.value})
   }

   useEffect(() => {

   }, []);

   useEffect(() => {

   }, []);


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
    

        try{

        let body = {
            email: credentials.email,
            password: credentials.password,
        }
        
            let res = await axios.post('http://localhost:3001/login', body);

            props.dispatch({type: LOGIN, payload:res.data});

            let data = { 
            token: res.data.token,
            user: res.data.user,
            idUser: res.data.user._id
            }

            //Redux
            props.dispatch({type:LOGIN,payload:data});

            setTimeout(()=> {
            
                history.push("/");
    
            }, 750);

        } catch {
            setMensajeError({...msgError, eValidate: "Credentials are not correct!"})
        }

        }

    return (
        <div className="vistaLogin">
            <div className="loginContainer">
                <div className="header">
                    <h2>Please Sign In</h2>
                </div>
                <label>Email:</label>
                <input className="inputBase"  type='email' name='email' title='email' placeholder="Email" onBlur={()=>checkError("email")} onChange={updateCredentials}  length='30' required/>
                <div className="errorText">{msgError.eEmail}</div>
                <label>Password:</label>
                <input className="inputBase"  type='password'  name='password' title='password' placeholder="Password" onBlur={()=>checkError("email")} onChange={updateCredentials}  length='30' required/>
                <div className="errorText">{msgError.ePassword}</div>
                <div className="SignIn" onClick={()=>logMe()}>Login</div>
                <div className="errorText">{msgError.eValidate}</div>
                <div className="register">Not registered yet?</div>
            <Sender className="signUp" path="/register" destino="Sign Up"/>
            </div>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
}))(Login);