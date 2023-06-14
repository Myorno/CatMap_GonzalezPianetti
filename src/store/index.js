import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ItemReducer from './reducers/item.reducer';
import LocationReducer from './reducers/location.reducer'

const RootReducer = combineReducers({
    items: ItemReducer,
    locationInfo: LocationReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));
