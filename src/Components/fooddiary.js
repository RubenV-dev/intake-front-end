import React from 'react';
import FoodItem from './food'
import { useSelector } from 'react-redux'
// import userActions from '../redux/actions';

const FoodDiary = props => {

// const dispatch = useDispatch();
// dispatch(userActions.getAllFoods());

const myFoods = useSelector(state => state.myFood)
  // console.log(state)

  // const handleClick = () => {
  //   console.log("hi")
  //   dispatch(userActions.getAllFoods());
  // }
    return (
        <div className="food-diary">
            <h1>My Food Diary</h1>
            { myFoods.map((food, index) => <FoodItem key={`${food.id}-${index}`} food={food} handleClick={null} />)}
        </div>
    ) 
}

export default FoodDiary
