import {
    StyleSheet
} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 30,
    },
    headerContainer: {
        height: 200,
        paddingTop: 80,
        fontFamily: fonts.main,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        marginBottom: 30,
        fontSize: 32,
        fontWeight: "500",
        color: colors.primary,
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
        color: colors.secondary,
        fontSize: 30
    },
    propCat: {
        color: colors.secondary,
        fontSize: 16,
    }
});

export default styles;