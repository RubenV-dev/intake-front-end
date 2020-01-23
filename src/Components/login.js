import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const LoginPage = props => {
    const dispatch = useDispatch();
    const [loginForm, setLoginForm] = useState({
      username: '',
      password: ''
    });
  
    const handleSubmit = () => {
      // e.preventDefault();
      dispatch(userActions.loginUserToDB(loginForm));
      dispatch(userActions.getAllFoods())
      props.history.push('/');
    };
  
    const handleChange = e =>
      setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          handleSubmit()
        }
    }
      const { username, password } = loginForm;
  
    const token = localStorage.getItem("token")
    // console.log(token)
    return (
      !token ? (
      <div className="login-form">
      <form>
        <h1>Login Page</h1>
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
        {/* <input type="submit" /> */}
      </form>
      <li onClick={handleSubmit}>Login Now</li>
      </div> ) : ( "You are Already Logged in")
    );
  };
  
  export default LoginPage;

