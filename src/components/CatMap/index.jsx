import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./style";
import CatMarker from "../CatMarker";

const CatMap = ({ catsFromCountry, userLocation }) => {
  const markerImage = require("../../assets/images/location_icon.png");

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
        <Marker coordinate={userLocation} title="you" />
        {catsFromCountry.map((cat, key) => {
          const location = {
            latitude: cat.latitude,
            longitude: cat.longitude,
          };
          return (
            <CatMarker
              key={`cat-marker-${key}`}
              coordinate={location}
              title={cat.name}
              image={markerImage}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default CatMap;
