import * as actionTypes from '../actionTypes';
import {initialState} from '../initialState';

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ACTION_MOVIES:
      return {
        ...state,
        actionMovie: action.payload,
      };
    case actionTypes.GET_CRIME_MOVIES:
      return {
        ...state,
        crimeMovie: action.payload,
      };
    case actionTypes.GET_DRAMA_MOVIES:
      return {
        ...state,
        dramaMovie: action.payload,
      };
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovie: action.payload,
      };
    case actionTypes.GET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovie: action.payload,
      };
    default:
      return state;
  }
}
