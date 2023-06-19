export const SET_COUNTRY = "SET_COUNTRY";
export const SET_NEW_LOCATION = "SET_NEW_LOCATION";

export const setCountry = (countryCode) => ({
  type: SET_COUNTRY,
  countryCode,
});

export const setNewLocation = (location) => ({
  type: SET_NEW_LOCATION,
  location,
});
