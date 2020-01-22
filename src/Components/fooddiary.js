import React from 'react';
import FoodItem from './food'
import { useSelector } from 'react-redux'
// import userActions from '../redux/actions';
// import { useDispatch } from 'react-redux';

const FoodDiary = props => {
// const dispatch = useDispatch();

// window.onload = () => {
//   console.log("i have loaded")
// }

// useEffect(() => {  
//   debugger;
//   if(localStorage.token) {
//     debugger;
//   dispatch(userActions.persistUser())
//   // dispatch(userActions.getAllFoods())
// }
// }, [dispatch]
// )

// window.onloadstart = () => {
//   if (localStorage.token) {
//   dispatch(userActions.persistUser())
//   dispatch(userActions.getAllFoods())
//   }
// }

const foods = useSelector(state => state.userObj.foods)
// const myfoods = state.myFood
// debugger;
// console.log(myfoods)
// console.log(state)

// const renderFoods = () => {
//   return (
//     state.userObj.foods.concat(myfoods)
//   )
// }

const logFood = (foodObj) => {
  console.log(foodObj)
}
    return (
        <div className="food-diary">
            <h1>My Food Diary</h1>
            <ol>
            { foods.map((food, index) => <FoodItem key={`${food.id}-${index}`} food={food} handleClick={logFood} />)}
            </ol>
        </div>
    ) 
}

export default FoodDiary
