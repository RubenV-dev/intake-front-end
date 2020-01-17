import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import userActions from '../redux/actions';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions.js';

const DataAnalysis= props => {

    const dispatch = useDispatch();

    const [dataState, setDataState] = useState({
        calories: 0,
        carbs: 0,
        fat: 0,
        protein: 0
    })

    useEffect(() => {
        if (localStorage.token && !myFoods) {
                dispatch(userActions.persistUser())
        }
        getMacroData()
    },[dispatch]
    )

    const myFoods = useSelector(state => state.userObj.foods)

    const getMacroData = () => {
        let totalCal = 0
        let totalcarbs = 0
        let totalfat = 0
        let totalprotein = 0
        myFoods.forEach(food => {
            totalCal = totalCal += Math.round(Number(food.calories.split("kcal")[0]) * 100) / 100 ;
            totalcarbs = totalcarbs += Math.round(Number(food.carbs.split("g")[0]) * 100) / 100;
            totalfat = totalfat += Math.round(Number(food.fat.split("g")[0]) * 100) / 100;
            totalprotein = totalprotein += Math.round(Number(food.protein.split("g")[0]) * 100) / 100;
        })
        totalCal = Math.round( totalCal * 100) / 100
        totalcarbs = Math.round( totalcarbs * 100) / 100 
        totalfat = Math.round( totalfat * 100) / 100
        totalprotein = Math.round( totalprotein * 100) / 100

        setDataState({
            calories: totalCal,
            carbs: totalcarbs,
            fat: totalfat,
            protein: totalprotein
        })
    }

    const info = [
        {x:0, y:1 },
        {x:1, y:2},
        {x:2, y:3 },
        {x:3, y:4 },
        {x:4, y:5 },
        {x:5, y:6 },
        {x:6, y:7 },
        {x:7, y:8 },
        {x:8, y:9 },
        {x:9, y:10 },
        {x:10, y:11 },
      ]
  
    return (
        <div className="graph-container">
            <div className="graph">
                <XYPlot height={350} width={350} style={{backgroundColor: "purple"}} >
                    <LineSeries color="red" data={info} />
                    {/* <VerticalGridLines /> */}
                    <HorizontalGridLines />
                    <XAxis color="white" />
                    <YAxis color="white" />
                    <LineSeries color="red" data={info} />
                </XYPlot>
            </div>

            {/* <button onClick={getData}>Get Data</button> */}

            <div className="macro-info">
                <li>Total Calories: {dataState.calories} kcal</li>
                <li>Total Protein: {dataState.protein} grams </li>
                <li>Total Carbs: {dataState.carbs} grams </li>
                <li>Total Fats: {dataState.fat} grams </li>
            </div>
        </div>
    )
}

export default DataAnalysis
