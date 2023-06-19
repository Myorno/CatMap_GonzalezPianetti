import { SELECTED_ITEM, ADD_ITEM, REMOVE_ITEM } from "../actions/item.action";
import { CATS } from "../../data/cats";
import { CAT_COLORS } from "../../data/catColors";
import Cat from "../../models/Cat";

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
          catCountry: action.catCountry,
        },
      };
    case REMOVE_ITEM:
      const filteredCatList = state.catList.filter(
        (item) => item.id !== action.catId
      );
      return {
        ...state,
        catList: filteredCatList,
      };
    case ADD_ITEM:
      const {
        name,
        description,
        mainColor,
        latitude,
        longitude,
        country,
        id,
        image,
      } = action.payload;
      const newCat = new Cat(
        id.toString(),
        image,
        name,
        description,
        mainColor,
        latitude,
        longitude,
        country
      );
      const newCatList = [...state.catList, newCat];
      return {
        ...state,
        catList: newCatList,
      };
    default:
      return state;
  }
};

export default ItemReducer;
