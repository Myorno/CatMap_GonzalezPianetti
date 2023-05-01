import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    renderItemStyle: {
        height: 60,
        flexDirection: "row",
        marginBottom: 25,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 3,
    },
});

export default styles;