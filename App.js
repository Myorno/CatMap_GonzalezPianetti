import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './src/constants/colors';
import { List, Item } from './src/screens';

export default function App() {

  const [loadedFont] = useFonts({
    "Comme-Regular": require('./src/assets/fonts/Comme-Regular.ttf')
  });

  const [selectedCat, setSelectedCat] = useState(null);
  const [catList, setCatList] = useState([]);

  const handleCatSelection = (cat) => {
    setSelectedCat(cat);
  };

  if (!loadedFont) {
    return (null);
  }

  return (
    <View style={styles.container}>
      {
        !selectedCat ?
          <List list={catList} setList={setCatList} selectCat={handleCatSelection} /> :
          <Item cat={selectedCat} selectCat={handleCatSelection} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});