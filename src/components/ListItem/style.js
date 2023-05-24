import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

const styles = StyleSheet.create({
    renderItem: {
        height: 80,
        flexDirection: "row",
        marginBottom: 25,
        borderRadius: 10,
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.terciary,
        color: COLORS.primary,
    },
    catContainer: {
        width: 100,
        flexDirection: "row",
        alignItems: "center",
    }, 
    textRenderItem: {
        color: COLORS.primary,
        fontWeight: "bold",
        paddingLeft: 5,
        fontFamily: FONTS.main,
        fontSize: 16,
    },
    deleteText: {
        color: COLORS.secondary,
        padding: 5,
        fontFamily: FONTS.main,
    },
    deleteContainer: {
        backgroundColor: "transparent",
    },
    viewText: {
        color: COLORS.secondary,
        fontFamily: FONTS.main,
        padding: 5,
    },
    viewContainer: {
        backgroundColor: "transparent",
    },
    actionsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
});

export default styles;