import * as actionTypes from '../actionTypes';
import {initialState} from '../initialState';

export default function creditReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CREDITS:
      return {
        ...state,
        credits: action.payload,
      };

    default:
      return state;
  }
}
