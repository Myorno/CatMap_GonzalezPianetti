import {
    StyleSheet
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';

const styles = StyleSheet.create({
    propCat: {
        color: COLORS.secondary,
        fontSize: 17,
        fontFamily: FONTS.fontFamily,
        paddingVertical: 10,
        textAlign: 'left'
    }
});

export default styles;