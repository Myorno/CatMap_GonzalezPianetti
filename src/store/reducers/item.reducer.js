import { SELECTED_ITEM, ADD_ITEM, REMOVE_ITEM } from "../actions/item.action";
import { CATS } from "../../data/cats";
import { CAT_COLORS } from "../../data/catColors";

const initialState = {
  catList: CATS,
  catColors: CAT_COLORS,
  selected: {
    cat: null,
    catColor: null,
    catCountry: null,
  },
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ITEM:
      return {
        ...state,
        selected: {
          cat: action.cat,
          catColor: action.catColor,
          catCountry: action.catCountry
        },
      };
    case REMOVE_ITEM:
      const filteredCatList = state.catList.filter((item) => item.id !== action.catId);
      return {
        ...state,
        catList: filteredCatList,
      };
    case ADD_ITEM:
      const newCatList = [...state.catList, action.cat];
      return {
        ...state,
        catList: newCatList,
      };
    default:
      return state;
  }
};

export default ItemReducer;
