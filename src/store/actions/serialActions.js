import * as actionTypes from "../actionTypes";
import api from "../../api/api";
import {request} from "../../requests/requests";

export const getPopularTv = () => {
    return async (dispatch) => {

        const popular = await api.get(request.getPopularTv);

        dispatch({ type: actionTypes.GET_POPULAR_TV, payload: popular.data });

    };
  };

  export const getNetflixOriginal = () => {
    return async (dispatch) => {

        const netflix = await api.get(request.getNetflixOriginal);

        dispatch({
          type: actionTypes.GET_NETFLIX_ORIGINAL,
          payload: netflix.data,
        });

    };
  };

  export const getTrendingTv = () => {
    return async (dispatch) => {

        const trending = await api.get(request.getTrendingTv);

        dispatch({ type: actionTypes.GET_TRENDING_TV, payload: trending.data });

    };
  };


  export const getActionAdventureTv = () => {
    return async (dispatch) => {

        const action = await api.get(request.getActionAdventureTvShows);

        dispatch({ type: actionTypes.GET_ACTION_TV, payload: action.data });

    };
  };

  export const getCrimeTv = () => {
    return async (dispatch) => {

        const crime = await api.get(request.getCrimeTvShows);

        dispatch({ type: actionTypes.GET_CRIME_TV, payload: crime.data });

    };
  };