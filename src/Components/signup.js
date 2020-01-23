import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions.js';

const Signup = props => {
    const dispatch = useDispatch();
  
    const [signupForm, setSignupForm] = useState({
      username: '',
      password: '',
      name: '',
      age: '',
      gender: '',
      weight: ''

    });
  
    const handleChange = e => {
      setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    }

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSubmit()
      }
  }
  
    const handleSubmit = () => {
      // e.preventDefault();
      const { history } = props;
      dispatch(userActions.newUserToDB(signupForm));
      dispatch(userActions.getAllFoods())
      // dispatch(userActions.getUserFood(userObj))
      history.push('/');
    };
  
    const { username, password, name, age, gender, weight } = signupForm;
  
    return (
      <div className = "sign-in-form">
      <form>
        <h1>Signup Page</h1>
        <input onKeyPress={handleKeyPress}
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input onKeyPress={handleKeyPress}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input onKeyPress={handleKeyPress}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />
        <input onKeyPress={handleKeyPress}
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input onKeyPress={handleKeyPress}
          type="text"
          name="gender"
          value={gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <input onKeyPress={handleKeyPress}
          type="text"
          name="weight"
          value={weight}
          onChange={handleChange}
          placeholder="Weight"
        />
        {/* <input type="submit" /> */}
      </form>
      <li onClick={handleSubmit}>Sign Up Now</li>
      </div>
    );
  };
  
  export default Signup;

