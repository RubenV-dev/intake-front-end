import React, { useState } from 'react'
import FoodItem from './food'
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../redux/actions'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const NewFood = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const [searchBar, setSearchTerm] = useState({
    searchTerm: ''
  })
  const { searchTerm } = searchBar

  const MySwal = withReactContent(Swal)

  const handleChange = e => {
    setSearchTerm({...searchBar, [e.target.name]: e.target.value})
  }

  const handleClick = (foodObj) => {
    // console.log(foodObj, state.userObj)
    dispatch(userActions.persistFood(state.userObj, foodObj))
    MySwal.fire({title: "Congrats, Food added! Well Done!", footer: "Your food has been added to your Diary" })
    props.history.push('/')
    // console.log(state)
  }

  const renderList = () => {
      let newArray = [...state.foods]
      newArray = searchTerm === "" ? newArray : newArray.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
      return newArray
  }
  
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
              {/* <input type="submit" /> */}
            </form>
            <ul>
              {renderList().map(food => <FoodItem key={food.id} food={food} handleClick={handleClick} />)}
            </ul>
            
        </div>
    )
  
}

export default NewFood

