import { StyleSheet } from 'react-native';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

const styles = StyleSheet.create({
    inputContainer: {
      paddingHorizontal: 30,
      paddingVertical: 20,
      fontFamily: FONTS.main,
    },
    titleContainer: {
      marginBottom: 25,
      fontSize: 40,
      fontWeight: "500",
      color: COLORS.primary,
    },
    addItemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      borderBottomColor: COLORS.shadow,
      borderBottomWidth: 2,
      width: 200,
    },
    listContainer: {
      marginHorizontal: 30,
      marginTop: 20,
      padding: 3,
    },
    buttonCustom: {
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      borderRadius:10,
    },
    textCustom: {
      color: "#ffffff",
      textAlign: "center",
      padding: 10,
  },
  });

  export default styles;