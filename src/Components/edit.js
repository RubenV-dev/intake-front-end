import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions.js';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Edit = props => {
    const dispatch = useDispatch();
    const userObj = useSelector(state => state.userObj)
    const MySwal = withReactContent(Swal)
//   let { id, username, name, age, gender, weight } = userObj
    const [editForm, setEditForm] = useState({
      id: userObj.id,
      username: userObj.username,
      name: userObj.name,
      age: userObj.age,
      gender: userObj.gender,
      weight: userObj.weight
    });

    const handleChange = e => {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = () => {
      // e.preventDefault();
      const { history } = props;
      dispatch(userActions.editUserInDatabase(editForm));
      MySwal.fire({title: "Your information has been Changed", footer: "Your Profile will now reflect the updated changes" })
    //   dispatch(userActions.getAllFoods())
      // dispatch(userActions.getUserFood(userObj))
      history.push('/');
    };
  
    const { username, name, age, gender, weight } = editForm;
//   console.log(editForm)
    return (
      <div className = "login-form">
      <form>
        <h1>Edit Profile Information</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        {/* <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        /> */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleChange}
          placeholder="Weight"
        />
        {/* <input type="submit" /> */}
      </form>
      <li onClick={handleSubmit}>Edit User Info</li>
      </div>
    );
  };
  
  export default Edit;

