import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const LoginPage = props => {
    // initializing dispatch
    const dispatch = useDispatch();
    // const userObj = useSelector(state => state.userObj)
    // Setting up local state using the useState hook
    const [loginForm, setLoginForm] = useState({
      username: '',
      password: ''
    });
  
    // controlled form functions
    const handleSubmit = () => {
      // e.preventDefault();
      dispatch(userActions.loginUserToDB(loginForm));
      dispatch(userActions.getAllFoods())
      props.history.push('/');
    };
  
    const handleChange = e =>
      setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  
    // Destructuring keys from our local state to use in the form
    const { username, password } = loginForm;
  
    // Component code wrap it in a ternary where its conditionally rendered and doesnt show up at all because you are already logged in
    const token = localStorage.getItem("token")
    // console.log(token)
    return (
      !token ? (
      <div className="login-form">
      <form>
        <h1>Login Page</h1>
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
        {/* <input type="submit" /> */}
      </form>
      <li onClick={handleSubmit}>Login Now</li>
      </div> ) : ( "You are Already Logged in")
    );
  };
  
  export default LoginPage;

