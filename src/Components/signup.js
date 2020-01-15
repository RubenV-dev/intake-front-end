import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions.js';

const Signup = props => {
    // initializing dispatch
    const dispatch = useDispatch();
    // const userObj = useSelector(state => state.userObj)
  
    // Setting up local state using the useState hook
    const [signupForm, setSignupForm] = useState({
      username: '',
      password: ''
    });
  
    // Controlled form functions
    const handleChange = e => {
      setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      const { history } = props;
      dispatch(userActions.newUserToDB(signupForm));
      dispatch(userActions.getAllFoods())
      // dispatch(userActions.getUserFood(userObj))
      history.push('/');
    };
  
    // Destructuring keys from our local state to use in the form
    const { username, password } = signupForm;
  
    // Component code
    return (
      <div className = "sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Signup Page</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input type="submit" />
      </form>
      </div>
    );
  };
  
  export default Signup;

