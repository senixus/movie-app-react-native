import {combineReducers} from 'redux';
import movieReducer from './reducers/movieReducer';
import serialReducer from './reducers/serialReducer';
import searchReducer from './reducers/searchReducer';
import creditReducer from './reducers/creditReducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  serial: serialReducer,
  search: searchReducer,
  credit: creditReducer,
});

export default rootReducer;
