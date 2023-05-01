import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    renderItemStyle: {
        height: 50,
        flexDirection: "row",
        marginBottom: 25,
        borderLeftColor: "#957dad",
        borderLeftWidth: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e0bbe4",
        color: "#332e2d",
    },
    textRenderItem: {
        color: "#332e2d",
        paddingHorizontal: 10,
    },
    textCustom: {
        color: "#332e2d",
        paddingHorizontal: 10,
    },
    buttonCustom: {
        backgroundColor: "transparent",
    },
});

export default styles;