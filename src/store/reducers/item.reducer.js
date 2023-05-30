import { SELECTED_ITEM } from "../actions/item.action";
import { CATS } from "../../data/cats";
import { CAT_COLORS } from "../../data/catColors";

const initialState = {
  catList: CATS,
  catColors: CAT_COLORS,
  selected: {
    cat: null,
    catColor: null,
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
        },
      };
    default:
      return state;
  }
};

export default ItemReducer;
