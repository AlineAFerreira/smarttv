import { combineReducers } from 'redux';
import menu from './reducers/menu';
import shared from './reducers/shared';

export default combineReducers({
  menu, shared
})