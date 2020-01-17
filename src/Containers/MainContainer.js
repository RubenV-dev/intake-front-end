import React from 'react';
import { Route, Switch} from 'react-router-dom'
import NewFood from '../Components/newfood'
import FoodDiary from '../Components/fooddiary'
import Signup from '../Components/signup'
import Login from '../Components/login'
import Home from '../Components/home'
import Bmi from '../Components/bmicalc'
import DataAnalysis from './DataAnalysis'


export default class MainContainer extends React.Component {
  render() {
    const token = localStorage.getItem("token")
    console.log(token)
    return (
        <div className="main">
            <Switch>
                <Route exact path='/' render={() => {return (<Home />)}}/>
                <Route path='/new-food' component={ NewFood } />
                <Route path='/food-diary' component={ FoodDiary } />
                <Route path='/bmi-calc' component={ Bmi } />
                <Route path='/signup' component={ Signup } />
                <Route path='/login' component={ Login } />
                <Route path='/data-analysis' component={ DataAnalysis } />
            </Switch>
        </div>
    )
  } 
}

