import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
    renderItem: {
        height: 50,
        flexDirection: "row",
        marginBottom: 25,
        borderLeftColor: colors.primary,
        borderLeftWidth: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.terciary,
        color: colors.primary,
        fontFamily: fonts.main,
    },
    textRenderItem: {
        color: colors.primary,
        paddingHorizontal: 10,
    },
    deleteText: {
        color: colors.primary,
        paddingHorizontal: 10,
    },
    deleteContainer: {
        backgroundColor: "transparent",
    },
    viewText: {
        color: colors.primary,
        paddingHorizontal: 10,
    },
    viewContainer: {
        backgroundColor: "transparent",
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "20%"
    },
});

export default styles;