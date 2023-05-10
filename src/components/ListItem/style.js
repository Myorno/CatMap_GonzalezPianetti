import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
    renderItem: {
        height: 50,
        flexDirection: "row",
        marginBottom: 25,
        borderLeftColor: colors.secondary,
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
        fontWeight: 600,
    },
    deleteText: {
        color: colors.secondary,
        paddingHorizontal: 5,
    },
    deleteContainer: {
        backgroundColor: "transparent",
    },
    viewText: {
        color: colors.secondary,
        paddingHorizontal: 5,
    },
    viewContainer: {
        backgroundColor: "transparent",
    },
    actionsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%"
    },
});

export default styles;