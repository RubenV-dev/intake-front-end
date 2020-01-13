const initialState = {
  foods: [
    {id: 1, name:"billy", type: "vegetable"},
    {id: 2, name:"sally", type: "vegetable"},
    {id: 3, name:"mike", type: "vegetable"},
    {id: 4, name:"henderson", type: "vegetable"},
    {id: 5, name:"agesd", type: "vegetable"}
  ],
  userObj: {},
  myFood: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        // console.log(payload)
        return {
          ...state,
          userObj: payload,
        }
        
      case 'CLEAR_USER':
        return {
          ...state,
          userObj: {}
        };
      case 'SET_FOODS':
        return {
          ...state,
          foods: payload
        };

        case 'SET_NEW_FOOD':
          return {
            ...state,
            myFood: [...state.myFood, payload]
          }
      default:
        return state;
    }
  };