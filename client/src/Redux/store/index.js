import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)),);

export default store;