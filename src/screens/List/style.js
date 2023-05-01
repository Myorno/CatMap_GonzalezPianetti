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
      color: "#1E283C",
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
      flex: 2,
      marginHorizontal: 30,
      marginTop: 20,
      padding: 3,
    }
  });

  export default styles;