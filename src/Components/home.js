import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import Nav from './nav'
// import { useDispatch } from 'react-redux';
// import userActions from './redux/actions.js';

const Home = () => {
    const state = useSelector(state => state);
    // const token = () => {
    //     return localStorage.getItem('token')
    // }

    // console.log(token(), state)

    const text = state.userObj.username ? (
        <>
        <div className="choice-container">
        <div className="home-choice">
            <NavLink exact to='/new-food'>Add New Foods</NavLink>
        </div>
        <div className="home-choice">
            <NavLink exact to='/food-diary'>My Food Diary</NavLink>
        </div>
        <div className="home-choice">
            <NavLink exact to='/bmi-calc'>BMI Calculator</NavLink>
        </div>
        <div className="home-choice">
            <NavLink exact to='data-analysis'>My Data Analysis</NavLink>
            {/* <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink> */}
        </div>
        </div>
        </>
    ) : ( 
        <div className="wel-message">
        <h1>Welcome to Intake. Your one stop Shop for Nutrition and Fitness tracking. If you haven't already, please sign up or sign in now</h1>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        </div>
    );

    // const render = username ? (<> <Nav /><div className="welcome">{text}</div> </>) : (<div className="welcome">{text}</div>)
    return <div className="welcome">{text}</div>
  };
  
  export default Home;
