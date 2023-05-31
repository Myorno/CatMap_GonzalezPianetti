
export const SELECTED_ITEM = "SELECTED_ITEM";

export const selectedCat = (cat, color) => ({
  type: SELECTED_ITEM,
  cat: cat,
  catColor: color
});
