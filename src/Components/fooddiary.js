import React from 'react';
import FoodItem from './food'
import { useSelector } from 'react-redux'
// import userActions from '../redux/actions';

const FoodDiary = props => {
// const dispatch = useDispatch();
const state = useSelector(state => state)
const myfoods = state.myFood
console.log(myfoods)

const renderFoods = () => {
  return (
    state.userObj.foods.concat(myfoods)
  )
}
    return (
        <div className="food-diary">
            <h1>My Food Diary</h1>
            <ol>
            { renderFoods().map((food, index) => <FoodItem key={`${food.id}-${index}`} food={food} handleClick={null} />)}
            </ol>
        </div>
    ) 
}

export default FoodDiary
