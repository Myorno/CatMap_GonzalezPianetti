import {
    StyleSheet
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 30,
    },
    headerContainer: {
        height: 200,
        paddingTop: 80,
        fontFamily: FONTS.main,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        marginBottom: 30,
        fontSize: 32,
        fontWeight: "500",
        color: COLORS.primary,
        maxWidth: "80%"
    },
    backContainer: {
        width: 40,
        display: "flex",
        flexDirection: "row",
        marginRight: -30,
    },
    backText: {
        fontWeight: "600",
        color: COLORS.secondary,
        fontSize: 30
    },
    propCat: {
        color: COLORS.secondary,
        fontSize: 16,
    }
});

export default styles;