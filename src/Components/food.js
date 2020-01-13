import React from 'react';

const FoodItem = (props) => {
    return (
        // <div className="food-item">
            <li onClick={(e) => props.handleClick(props.food)}> Name: {props.food.name} | 
            Calories: {props.food.calories} | 
            Fat: {props.food.fat} |
            Carbs:{props.food.carbs} |
            Protein: {props.food.protein}
            </li>
        // </div>
    ) 
}

export default FoodItem
