import React, { useEffect } from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import Banner from './Components/banner'
import Nav from './Components/nav'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import userActions from './redux/actions.js';

const App = () => {
  const dispatch = useDispatch();
  //this part is empty and when you persist user on reload it doesnt update this variable
  

  
  useEffect(() => {
    if(localStorage.token) {
      debugger;
    dispatch(userActions.persistUser())
    dispatch(userActions.getAllFoods())
  }
}, [dispatch]
  )
  
  const userObj = useSelector(state => state.userObj);
  const render = userObj.username ? ( 
    <> 
    <Banner />
    <Nav />
    <MainContainer /> 
    </>) : ( 
    <> 
      <Banner />
      <MainContainer /> 
    </>)
  return (
    
    <div className="App">
      {render}
    </div>
  )

}
export default App