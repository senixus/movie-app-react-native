import * as actionTypes from "../actionTypes";
import api from "../../api/api";
import {request} from "../../requests/requests";


export const searchShows = (show) => {
    return async (dispatch) => {

        const response = await api.get(request.searchShows + `&query=${show}`);

        dispatch({ type: actionTypes.SEARCH_SHOW, payload: response.data });

    };
  };