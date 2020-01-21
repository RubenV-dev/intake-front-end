import React from 'react';
import Add from '../add.png'
import Diary from '../diary.png'
import Calculator from '../calculator.png'
import Graph from '../graph.png'
import Workout from '../workout.png'
import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import userActions from '../redux/actions';

const Footer = () => {
//   const dispatch = useDispatch();
  
  return (
    <footer className="footer">
        <NavLink activeClassName="activeLink" to="/new-food">
        <img src={Add} alt="add-food" height="25" width="25"/> 
            <p>Add New Food</p>
        </NavLink>
        <NavLink activeClassName="activeLink" to="/food-diary">
            <img src={Diary} alt="my-diary" height="25" width="25"/> 
            <p>My Food Diary</p>
        </NavLink>
        <NavLink activeClassName="activeLink" to="/bmi-calc">
            <img src={Calculator} alt="bmi-calculator" height="25" width="25"/> 
            <p>BMI Calculator</p>
        </NavLink>
        <NavLink activeClassName="activeLink" to="/data-analysis">
            <img src={Graph} alt="data-analysis" height="25" width="25"/> 
            <p>My Data Analysis</p>
        </NavLink>
        <NavLink activeClassName="activeLink" to="/workout">
            <img src={Workout} alt="workout" height="25" width="25"/> 
            <p>Workout</p>
        </NavLink>
    </footer>
  );
};

export default Footer;
