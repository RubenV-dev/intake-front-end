import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import userActions from '../redux/actions';

const BmiCalc = props => {
  // const dispatch = useDispatch();
  const [BmiForm, setBmiForm] = useState({
    height: '',
    weight: '',
    display: false,
    bmi : 0
  });

  const calculate = (height, weight) => {
    let bmi = ((703 * Number(weight)) / (Number(height))**2)
    return bmi
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (BmiForm.height !== '' && BmiForm.weight !== '') {
    setBmiForm({...BmiForm, display: !BmiForm.display})
    let result = calculate(BmiForm.height, BmiForm.weight)
    let roundedNum = Math.round(result * 100) /100;
    setBmiForm({...BmiForm, bmi: roundedNum})
    }
  };

  const handleChange = e =>
  setBmiForm({ ...BmiForm, [e.target.name]: e.target.value });


  const { height, weight } = BmiForm;
  
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
        <h1>BMI CALCULATOR</h1>
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleChange}
          placeholder="Enter Height in inches"
        />
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleChange}
          placeholder="Enter Weight in Lbs."
        />
        <input type="submit" value="Calculate BMI" />
      </form>
      {BmiForm.bmi !== 0? 
      <div className="bmi-render">
      <h3>Your BMI is:</h3>
      <h3>{BmiForm.bmi}</h3>
      <strong>
        BMI DATA INFO
      </strong>
      <h4>BMI Categories:</h4>
        <li>Underweight = {"< 18.5"}</li>
        <li>Normal weight = 18.5–24.9</li> 
        <li>Overweight = 25–29.9</li>
        <li>Obesity = BMI of 30 or greater</li>
      </div>
      : null 
      }
      </div>
    )
}

export default BmiCalc
