import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";

const styles = StyleSheet.create({
  markerImage: {
    width: 30,
    height: 35,
  },
  markerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.secondary
  }
});

export default styles;
