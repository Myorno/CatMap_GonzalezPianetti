import { SET_COUNTRY } from "../actions/location.action";
import { CATS } from "../../data/cats";
import { COUNTRIES } from "../../data/countries";

const initialState = {
  allCountries: COUNTRIES,
  catsFromCountry: [],
  country: "",
  newCatLocation: null,
};

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      const country = state.allCountries.find((country) => country.code === action.countryCode);
      const filteredCatList = CATS.filter((item) => item.country === country.id);
      return {
        ...state,
        catsFromCountry: filteredCatList,
        country: country.code,
      };
      case SET_NEW_LOCATION:
        return {
          ...state,
          newCatLocation: country.location,
        };

    default:
      return state;
  }
};

export default ItemReducer;
