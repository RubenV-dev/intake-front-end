import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = (props) => {
    dispatch(userActions.logoutUser())
    // localStorage.clear()
  };
  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
    </nav>
  );
};

export default Nav;
