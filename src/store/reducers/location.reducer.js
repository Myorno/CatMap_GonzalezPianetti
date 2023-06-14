import { SET_COUNTRY } from "../actions/location.action";
import { CATS } from "../../data/cats";
import { COUNTRIES } from "../../data/countries";

const initialState = {
  allCountries: COUNTRIES,
  catsFromCountry: [],
  country: "",
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      const country = COUNTRIES.find((country) => country.code === action.countryCode);
      const filteredCatList = CATS.filter((item) => item.country === country.id);
      return {
        ...state,
        catsFromCountry: filteredCatList,
        country: country.code,
      };

    default:
      return state;
  }
};

export default ItemReducer;
