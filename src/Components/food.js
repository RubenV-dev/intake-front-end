import React from 'react';

const FoodItem = (props) => {
    return (
        // <div className="food-item">
            <li onClick={(e) => props.handleClick(props.food)}> Name: {props.food.name} 
            <p>Calories: {props.food.calories}</p> 
            <p>Fat: {props.food.fat} </p>
            <p>Carbs:{props.food.carbs} </p>
            <p>Protein: {props.food.protein}</p>
            </li>
        // </div>
    ) 
}

export default FoodItem
