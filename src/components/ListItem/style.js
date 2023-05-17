import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

const styles = StyleSheet.create({
    renderItem: {
        height: 50,
        flexDirection: "row",
        marginBottom: 25,
        borderLeftColor: COLORS.secondary,
        borderLeftWidth: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.terciary,
        color: COLORS.primary,
        fontFamily: FONTS.main,
    },
    textRenderItem: {
        color: COLORS.primary,
        fontWeight: 600,
    },
    deleteText: {
        color: COLORS.secondary,
        paddingHorizontal: 5,
    },
    deleteContainer: {
        backgroundColor: "transparent",
    },
    viewText: {
        color: COLORS.secondary,
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