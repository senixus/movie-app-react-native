import * as actionTypes from '../actionTypes';
import {initialState} from '../initialState';

export default function serialReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_POPULAR_TV:
      return {
        ...state,
        popularTv: action.payload,
      };
    case actionTypes.GET_NETFLIX_ORIGINAL:
      return {
        ...state,
        netflixOriginalTv: action.payload,
      };
    case actionTypes.GET_TRENDING_TV:
      return {
        ...state,
        trendingTv: action.payload,
      };
    case actionTypes.GET_ACTION_TV:
      return {
        ...state,
        actionAdventureTv: action.payload,
      };
    case actionTypes.GET_CRIME_TV:
      return {
        ...state,
        crimeTv: action.payload,
      };
    default:
      return state;
  }
}
