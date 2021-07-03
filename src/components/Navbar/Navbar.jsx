import React from 'react';
import {NavLink} from 'react-router-dom';
import { LOGOUT } from '../../redux/types'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {

  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT });

    setTimeout(() => {
      history.push('/');
    }, 500)

  }

  if (props.credentials?.token === '') {
    return (
      <div className="nav">
        <div className="NavLink">
          <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/" id="title">Blooper</NavLink>
        </div>
        <div className="space"></div>
        <div className="NavMenu" >
          <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/register">Register</NavLink>
          </div>
          <div className="NavLink">
          <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    )

    } else if(props.credentials?.token !== '') {
      return (
        <div className="nav">
          <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/" id="title">Blooper</NavLink>
          </div>
          <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/movies" id="movies">Movies</NavLink>
          </div>
          <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/search" id="movies">
              <FontAwesomeIcon className="iconMenuLateral" icon={faSearch}/>
            </NavLink>
          </div>
          <div className="space"></div>
          <div className="NavMenu" >
            <div className="NavLink">
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/profile"><FontAwesomeIcon className="iconMenuLateral" icon={faUser}/></NavLink>
            </div>
            <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={()=>logOut()} to="/" id="logout">Logout</NavLink>
            </div>
          </div>
        </div>
      )
    } else if(props.credentials?.user.isAdmin === true) {
    return (
      <div className="nav">
         <div className="NavLink">
          <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/" id="title">Blooper</NavLink>
        </div>
        <div className="space"></div>
        <div className="NavMenu">
            <div className="NavLink">
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/users"><FontAwesomeIcon className="iconMenuLateral" icon={faUsers}/></NavLink>
            </div>
            <div className="NavLink">
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/orders">Orders</NavLink>
            </div>
            <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={()=>logOut()} to="/" id="logout">Logout</NavLink>
            </div>
        </div>
      </div>
        )
} else {
  return (
    <div>Aqui pasa algo que no huele bien!</div>
  )
}


};


    export default connect((state)=>({credentials:state.credentials}))(Navbar);
