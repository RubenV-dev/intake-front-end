import React from 'react';
// import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import userActions from '../redux/actions';

const Help = () => {
//   const dispatch = useDispatch();
  
  return (
    <main className="help">
    <h2>Help Page</h2>
      <p>Welcome to Intake, a nutrition tracker app that will help you manage the amount of food that you consume.</p>
      <p>Add New Food- Use this option to search for foods you wish to add to your Food Diary. Use the search bar at the top of the page to narrow down the list of foods and click on the item you wish to add to your list. You will be prompted when the food is successfully added to your list.</p>
      <p>My Food Diary- use this option to see the current items added to your diary. You will also be able to delete an item from your diary by simply clicking on the trash button</p>
      <p>BMI Calculator- use this option to calculate what your current BMI(Body Mass Index) is. Please enter your height in inches and your current weight in pounds in order to calculate this measure. This number can be used alongside other calculators to determine what your nutrition plan should be depending on your fitness goal.</p>
      <p>My Data Analysis- use this option to see a graph of your current total calories alongside your macros for all the foods you have eaten.</p>
      <p>Workout- use this option to see what workouts you can do if your goal is to burn some calories. Clicking on the workouts will redirect you to more details on the chosen workout</p>
    </main>
  );
};

export default Help;
