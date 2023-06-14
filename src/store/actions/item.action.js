
export const SELECTED_ITEM = "SELECTED_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const selectedCat = (cat, color, countryName) => ({
  type: SELECTED_ITEM,
  cat,
  catColor: color,
  catCountry: countryName
});

export const addCat = (cat) => ({
  type: ADD_ITEM,
  cat,
});

export const removeCat = (catId) => ({
  type: REMOVE_ITEM,
  catId,  
});