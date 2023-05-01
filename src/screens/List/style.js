import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
      height: 200,
      paddingHorizontal: 30,
      paddingTop: 80,
    },
    titleContainer: {
      marginBottom: 30,
      fontSize: 40,
      fontWeight: "500",
      color: "#ab6f9e",
    },
    addItemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      borderBottomColor: "black",
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
      backgroundColor: "#ab6f9e",
      borderRadius:10,
    },
    textCustom: {
      color: "#ffffff",
      textAlign: "center",
      padding: 10,
  },
  });

  export default styles;