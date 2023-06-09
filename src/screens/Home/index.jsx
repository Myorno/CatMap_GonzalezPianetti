import React, { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import { setCountry } from "../../store/actions/location.action";
import styles from "./style";
import { CatMap, Loading } from "../../components";

const Home = ({ route }) => {
  const dispatch = useDispatch();
  const catsFromCountry = useSelector(
    (state) => state.locationInfo.catsFromCountry
  );

  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState({
    latitude: -34.603438648892244,
    longitude: -58.380926670646154,
  });

  useEffect(() => {
    getLocation()
      .then((location) => {
        if (location) {
          const newUserLocation = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          };
          getCountry(newUserLocation)
            .then((countryCode) => {
              setUserLocation(newUserLocation);
              countryCode && dispatch(setCountry(countryCode.toLowerCase()));
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getLocation = async () => {
    const isLocationOk = await veryPermissions();
    let locationRes = {};
    if (isLocationOk) {
      locationRes = await Location.getCurrentPositionAsync({});
    }
    return locationRes;
  };

  const veryPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("We need location permissions", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const getCountry = async (newUserLocation) => {
    let resCountryCode = "";
    const location = await Location.reverseGeocodeAsync(newUserLocation);
    if (location.length > 0) {
      resCountryCode = location[0].isoCountryCode;
    }
    return resCountryCode;
  };

  return (
    <View style={styles.mainContainer}>
      {!loading ? (
        <CatMap userLocation={userLocation} catsFromCountry={catsFromCountry} />
      ) : (
        <Loading />
      )}
    </View>
  );
};

export default Home;
