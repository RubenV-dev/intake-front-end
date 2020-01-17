const initialState = {
  foods: [],
  userObj: {
    foods: []
  },
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
          userObj: {},
          myFood: []
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
          case 'SET_MY_FOOD':
            return {
              ...state,
              myFood: [...state.myFood].concat(payload)
            }
      default:
        return state;
    }
  };