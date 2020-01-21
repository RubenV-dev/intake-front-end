import React, { useEffect } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css'
import MainContainer from './Containers/MainContainer'
import Banner from './Components/banner'
import Nav from './Components/nav'
import Footer from './Components/footer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import userActions from './redux/actions.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.token) {
      // debugger;
    dispatch(userActions.persistUser())
    dispatch(userActions.getAllFoods())
  }
}, [dispatch]
  )
  
  const userObj = useSelector(state => state.userObj);
  // const token = localStorage.getItem('token')
  const render = userObj.username ? ( 
    <> 
    <Banner />
    <Nav />
    <MainContainer />
    <Footer /> 
    </>) : ( 
    <> 
      <Banner />
      {/* <Nav /> */}
      <MainContainer /> 
    </>)
  return (
    
    <div className="App">
      {render}
    </div>
  )

}
export default App