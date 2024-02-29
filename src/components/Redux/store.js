import { legacy_createStore as createStore } from 'redux';
import musicReducer from './reducer';
const store = createStore(musicReducer);
export default store;


