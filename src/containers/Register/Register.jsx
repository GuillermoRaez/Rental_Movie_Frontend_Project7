import axios from 'axios';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {useHistory} from "react-router";
import Navbar from '../../components/Navbar/Navbar';



const Register = () => {

    let history = useHistory();

    //Hooks
    const [datosUser, setDatosUser] = useState(
        {
        firstname:'',
        lastname:'',
        birthday:'',
        phone: '',
        address: '',
        email: '',
        password: '',
    });


    //Handlers (manejadores)

    const updateFormulario = (e) => {
        setDatosUser({...datosUser, [e.target.name]: e.target.value});
    }

    //Funciones 

    const ejecutaRegistro = async () => {
        
        let user = {
            firstname: datosUser.firstname,
            lastname: datosUser.lastname,
            birthday: datosUser.birthday,
            phone: datosUser.phone,
            address: datosUser.address,
            email: datosUser.email,
            password: datosUser.password,
        }

        try{
            let res = await axios.post(("http://localhost:3001/users/register"), user);   
            console.log(res.data); 
            console.log("Usuario registrado!");
        
        setTimeout(()=> {
            history.push('/login');
        }, 1000); 

        }catch(err){
            console.log(err);
        };         
    }

    return (
    <div>
        <Navbar/>
        <div className="vistaRegister">
            <div className="form">
                <label>Firstname:</label>
                <input className="inputBaseone" type="text" name="firstname" 
                onChange={updateFormulario} placeholder="Firstname"></input>
                <label>Lastname:</label>
                <input className="inputBaseone" type="text" name="lastname" 
                onChange={updateFormulario} placeholder="Lastname"></input>
                <label>Birthday:</label>
                <input className="inputBaseone" type="date" name="birthday" 
                onChange={updateFormulario} placeholder="Birthday"></input>
                <label>Phone:</label>
                <input className="inputBaseone" type="text" name="phone" 
                onChange={updateFormulario} placeholder="Phone"></input>
                <label>Address:</label>
                <input className="inputBaseone" type="text" name="address" 
                onChange={updateFormulario} placeholder="Address"></input>
                <label>Email:</label>
                <input className="inputBaseone" type="email" name="email" 
                onChange={updateFormulario} placeholder="Email"></input>
                <label>Password:</label>
                <input className="inputBaseone" type="password" name="password" 
                onChange={updateFormulario} placeholder="Password"></input>
    
    
                <div className="sendButton" onClick={()=>ejecutaRegistro()}>Enviar</div>
            </div>
        </div>
    </div>
    )
}

export default connect()(Register);
