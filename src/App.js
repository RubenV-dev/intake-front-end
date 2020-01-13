import React from 'react';
import './App.css';
import MainContainer from './Containers/MainContainer'
import Banner from './Components/banner'
import Nav from './Components/nav'
import { useSelector } from 'react-redux'

const App = () => {
  const username = useSelector(state => state.userObj.username);
  const render = username ? ( 
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