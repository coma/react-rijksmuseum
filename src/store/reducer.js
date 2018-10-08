import { combineReducers } from 'redux';
import works from './worksReducer';
import work from './workReducer';

export default combineReducers({ works, work });
