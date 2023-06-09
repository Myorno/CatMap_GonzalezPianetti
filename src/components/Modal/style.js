import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        backgroundColor: COLORS.background,
        margin: 20,
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 30,
        paddingBottom: 30,
        alignItems: "center",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        fontFamily: FONTS.main,
    },
    modalText: {
        fontSize: 22,
        color: COLORS.secondary,
        textAlign: "center"
    },
    modalButton: {
        marginTop: 10,
    },
    buttonText: {
        color:  COLORS.white,
        padding: 10,
        textAlign: "center",
        width: 100,
        fontSize: 17,
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 10
    },
    closeContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginRight: -20,
        marginBottom: 10
    },
    closeButtonText: {
        color: COLORS.secondary,
        fontSize: 17,
        width: 30,
        textAlign: "center"
    },
    closeButtonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%"
    }
});

export default styles;