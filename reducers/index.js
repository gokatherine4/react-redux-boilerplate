// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, INCREMENT_FIVE } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state-1;
      case CLEAR:
        return state =0;
      case INCREMENT_FIVE:
        return state +5;
    default:
      return state;
  }
};
