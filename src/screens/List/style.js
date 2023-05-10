import { StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    inputContainer: {
      height: 200,
      paddingHorizontal: 30,
      paddingTop: 80,
      fontFamily: fonts.main,
      marginBottom: 10,
    },
    titleContainer: {
      marginBottom: 25,
      fontSize: 40,
      fontWeight: "500",
      color: colors.primary,
    },
    addItemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      borderBottomColor: colors.shadow,
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
      backgroundColor: colors.primary,
      borderRadius:10,
    },
    textCustom: {
      color: "#ffffff",
      textAlign: "center",
      padding: 10,
  },
  });

  export default styles;