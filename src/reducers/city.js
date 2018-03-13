//va a contener el manejo de estado de las ciudades
import { SET_CITY } from './../actions';

export const city = (state, action) => {
  switch (action.type) {
    case SET_CITY:
      return {...state, city: action.value}
    default:
      return state;
  }
}
