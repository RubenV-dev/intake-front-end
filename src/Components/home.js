import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import Nav from './nav'

const Home = () => {
    const username = useSelector(state => state.userObj.username);
    const state = useSelector(state => state)
    console.log(state)
    const text = username ? (
        <>
        {/* <Nav /> */}
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
            <NavLink exact to='/'>My Data Analysis</NavLink>
            {/* <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink> */}
        </div>
        </div>
        </>
    ) : ( 
        <div className="wel-message">
        <strong>"Welcome to Intake. Your one stop Shop for Nutrition and Fitness tracking. If you haven't already, please sign up or sign in now"</strong>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
        </div>
    );

    // const render = username ? (<> <Nav /><div className="welcome">{text}</div> </>) : (<div className="welcome">{text}</div>)
    return <div className="welcome">{text}</div>
  };
  
  export default Home;
