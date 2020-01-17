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

const state = useSelector(state => state)
const myfoods = state.myFood
// debugger;
// console.log(myfoods)
console.log(state)

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
