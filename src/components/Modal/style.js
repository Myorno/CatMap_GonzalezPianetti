import { StyleSheet } from 'react-native';
import color from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modal: {
        backgroundColor: color.highlight,
        margin: 20,
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
        shadowColor: color.shadow,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        fontFamily: fonts.main,
    },
    modalText: {
        fontSize: 24,
        color: color.primary,
        textAlign: "center"
    },
    modalButton: {
        marginTop: 10,
    },
    buttonText: {
        color:  color.highlight,
        padding: 10,
        textAlign: "center",
        width: 100,
        fontSize: 20,
    },
    buttonContainer: {
        backgroundColor: color.secondary,
        borderRadius: 10
    },
});

export default styles;