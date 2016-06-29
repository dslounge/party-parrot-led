import { combineReducers } from 'redux';
import board from './board';

const ledApp = combineReducers({
  board,
});

export default ledApp;
