import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ItemReducer from './reducers/item.reducer';

const RootReducer = combineReducers({
    items: ItemReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
