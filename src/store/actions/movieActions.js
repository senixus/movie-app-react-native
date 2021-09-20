import * as actionTypes from "../actionTypes";
import api from "../../api/api";
import {request} from "../../requests/requests";

export const getActionMovies = () => {
    return async (dispatch) => {
        const action = await api.get(request.getActionMovies);

      dispatch({ type: actionTypes.GET_ACTION_MOVIES, payload: action.data });
    }
}

export const getCrimeMovies = () => {
    return async (dispatch) => {

        const crime = await api.get(request.getCrimeMovies);

        dispatch({ type: actionTypes.GET_CRIME_MOVIES, payload: crime.data });

    };
  };

  export const getDramaMovies = () => {
    return async (dispatch) => {

        const drama = await api.get(request.getDramaMovies);

        dispatch({ type: actionTypes.GET_DRAMA_MOVIES, payload: drama.data });

    };
  };

  export const getPopularMovies = () => {
    return async (dispatch) => {

        const popular = await api.get(request.getPopularMovies);

        dispatch({ type: actionTypes.GET_POPULAR_MOVIES, payload: popular.data });

    };
  };

  export const getTrendingMovies = () => {
    return async (dispatch) => {

        const trending = await api.get(request.getTrendingMovies);

        dispatch({
          type: actionTypes.GET_TRENDING_MOVIES,
          payload: trending.data,
        });

    };
  };