import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalStyle: {
        backgroundColor: "#fae3d4",
        margin: 20,
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTextStyle: {
        fontSize: 24,
        color: "#332e2d",
        textAlign: "center"
    },
    modalButton: {
        marginTop: 10,
    },
    textCustom: {
        color: "#ffffff",
        padding: 10,
        textAlign: "center",
        width: 100,
        fontSize: 20,
    },
    buttonCustom: {
        backgroundColor: "#ab6f9e",
        borderRadius: 10
    },
});

export default styles;