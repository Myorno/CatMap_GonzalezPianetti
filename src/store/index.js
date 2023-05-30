import { combineReducers, createStore } from 'redux';
import ItemReducer from './reducers/item.reducer';

const RootReducer = combineReducers({
    items: ItemReducer,
});

export default createStore(RootReducer);
