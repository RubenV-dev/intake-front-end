import React from 'react';
import FoodItem from './food'
import { useSelector, useDispatch } from 'react-redux'
// import userActions from '../redux/actions';

const FoodDiary = props => {
// const dispatch = useDispatch();
const foods = useSelector(state => state.userObj.foods)
// debugger;

//filter based of id and do fetch to the index

  // const handleClick = () => {
  //   console.log("hi")
  //   dispatch(userActions.getAllFoods());
  // }
    return (
        <div className="food-diary">
            <h1>My Food Diary</h1>
            <ol>
            { foods.map((food, index) => <FoodItem key={`${food.id}-${index}`} food={food} handleClick={null} />)}
            </ol>
        </div>
    ) 
}

export default FoodDiary
