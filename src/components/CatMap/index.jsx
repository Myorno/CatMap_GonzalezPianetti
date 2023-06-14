import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./style";

const CatMap = ({ catsFromCountry, userLocation }) => {
  return (
    <View>
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker coordinate={userLocation}></Marker>
      </MapView>
    </View>
  );
};

export default CatMap;
