import {createStore,applyMiddleware} from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

//kako se koristi think - se importira applyMiddleware od redux se importira i thunk i vo createStore() kako vtor parametar e applyMiddleware(thunk)