import * as actionTypes from '../actionTypes';
import api from '../../api/api';
import {request} from '../../requests/requests';

export const getCreditsAction = id => {
  return async dispatch => {
    const response = api.get(
      `/credit/${id}?api_key=29979b5382a6b6518fb305d2a96c531e`,
    );
    console.log(response);
    dispatch({type: actionTypes.GET_CREDITS, payload: response.data});
  };
};
