import * as actionTypes from '../actionTypes';
import {initialState} from '../initialState';

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SHOW:
      return {
        ...state,
        searchedShows: action.payload,
      };

    default:
      return state;
  }
}
