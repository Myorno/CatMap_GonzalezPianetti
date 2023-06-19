import { moveAsync, documentDirectory } from "expo-file-system";
import { insertCat } from "../../../db";

export const SELECTED_ITEM = "SELECTED_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const selectedCat = (cat, color, countryName) => ({
  type: SELECTED_ITEM,
  cat,
  catColor: color,
  catCountry: countryName,
});

export const addCat = (catInfo, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });

      const result = await insertCat(Path, Cat);

      dispatch({
        type: ADD_ITEM,
        payload: { id: result.insertId, catInfo, image: Path },
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
};

export const removeCat = (catId) => ({
  type: REMOVE_ITEM,
  catId,
});
