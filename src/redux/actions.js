import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const BASE_URL = 'http://localhost:3000';
const USERS_URL = BASE_URL + '/users';
const PERSIST_URL = BASE_URL + '/persist';
const LOGIN_URL = BASE_URL + '/login';
const FOOD_ENTRY_URL = BASE_URL + '/food_entries'
const SPECIFIC_USER_URL = id => USERS_URL + '/' + id;

const MySwal = withReactContent(Swal)

const setUserAction = userObj => ({
    type: 'SET_USER',
    payload: userObj
});
  
const clearUserAction = () => ({
    type: 'CLEAR_USER'
});

const newUserToDB = userObj => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
    };
    fetch(USERS_URL, config)
      .then(r => r.json())
      .then(data => {
        if (!data.errors) {
        dispatch(setUserAction(data.user));
        localStorage.setItem('token', data.token);
        } else {
          MySwal.fire({title: "Woops an error occured!", footer: "Please try signing up with a different username" })
        }
        // console.log(data, localStorage.getItem("token") )
      });
};

const editUserInDatabase = userObj => dispatch => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  };
  fetch(SPECIFIC_USER_URL(userObj.id), config)
      .then(r => r.json())
      .then(user => {
        dispatch(setUserAction(user))
      })
}

const deleteUserFromDB = userId => dispatch => {
    const config = {
      method: 'DELETE'
    };
    fetch(SPECIFIC_USER_URL(userId), config).then(r => {
      dispatch(clearUserAction());
      localStorage.clear();
    });
};

const loginUserToDB = userCredentials => dispatch => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userCredentials)
    };
    fetch(LOGIN_URL, config)
      .then(r => r.json())
      .then(data => {
        // console.log(data)
          if (data.errors) {
            MySwal.fire({title: "Woops an error occured!", footer: "Please Try again with the correct password" })
          } else if (data.error) {
            MySwal.fire({title: "Woops an error occured!", footer: "Please Try logging in with the correct username" })
          }
            else {
              dispatch(setUserAction(data.user));
              localStorage.setItem('token', data.token);
          }
      });
};
  
const persistUser = () => dispatch => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `bearer ` + localStorage.getItem('token')
      }
    };
    fetch(PERSIST_URL, config)
      .then(r => r.json())
      .then(userInstance => {
        dispatch(setUserAction(userInstance));
      });
};

const logoutUser = () => dispatch => {
    dispatch(clearUserAction());
    localStorage.clear();
};

const setFoods = arrayOfFoods => ({
    type: "SET_FOODS",
    payload: arrayOfFoods
})

const getAllFoods = () => dispatch => {
    fetch(`http://localhost:3000/foods`)
    .then(resp => resp.json())
    .then(foodArr => {
      dispatch(setFoods(foodArr))
    })
}

const persistFood = (userObj, foodObj) => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userObj.id,
      food_id: foodObj.id
    })
  };
  fetch(FOOD_ENTRY_URL, config)
    .then(r => r.json())
    .then(data => {
      dispatch(setNewFood(foodObj));
    });
};

const setNewFood = foodObj => ({
  type: 'SET_NEW_FOOD',
  payload: foodObj
});

// const getUserFood = (userObj) => dispatch => {
//   fetch(SPECIFIC_USER_URL(userObj.id))
//     .then(resp => resp.json())
//     .then(userObj => {
//       // debugger;
//       // console.log(userObj)
//       dispatch(setMyFoods(userObj.foods))
//       // console.log(userObj) youor returned json has no foods on it
//     })
// }

// const setMyFoods = (foodArr) => ({
//   type: 'SET_MY_FOOD',
//   payload: foodArr
// })

export default {
    newUserToDB,
    deleteUserFromDB,
    loginUserToDB,
    persistUser,
    logoutUser, 
    setFoods,
    getAllFoods,
    persistFood,
    setNewFood,
    editUserInDatabase
  };
  
  