import React, { useState, useEffect } from 'react'
import FoodItem from './food'
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../redux/actions'

const NewFood = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const [searchBar, setSearchTerm] = useState({
    searchTerm: ''
  })
  const { searchTerm } = searchBar

  const handleChange = e => {
    setSearchTerm({...searchBar, [e.target.name]: e.target.value})
  }

  const handleClick = (foodObj) => {
    // console.log(foodObj, state.userObj)
    dispatch(userActions.persistFood(state.userObj, foodObj))
    props.history.push('/')
    console.log(state)
  }

  const renderList = () => {
      let newArray = [...state.foods]
      newArray = searchTerm === "" ? newArray : newArray.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
      return newArray
  }

  useEffect(() => {
    dispatch(userActions.getAllFoods())
  }, [searchTerm]
  )
  
    return (
        <div className="newfood">
            New Food component:
            <form>
              <input type="text" 
              name="searchTerm" 
              placeholder="Food Name"
              value={searchTerm}
              onChange={handleChange}
              />
              <input type="submit" />
            </form>
            <ul>
              {renderList().map(food => <FoodItem key={food.id} food={food} handleClick={handleClick} />)}
            </ul>
            
        </div>
    )
  
}

export default NewFood

