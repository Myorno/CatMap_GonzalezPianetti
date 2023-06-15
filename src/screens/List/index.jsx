import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ListItem } from "../../components";
import { selectedCat, removeCat } from "../../store/actions/item.action";
import styles from "./style";

const List = ({ navigation }) => {
  const cats = useSelector((state) => state.items.catList);
  const catColors = useSelector((state) => state.items.catColors);
  const countries = useSelector((state) => state.locationInfo.allCountries);
  const dispatch = useDispatch();

  const [catList, setCatList] = useState([]);
  const [search, setSearch] = useState("");
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const filteredCatList = search
      ? catList.filter((cat) => {
          return cat.name.toLowerCase().includes(search.toLowerCase());
        })
      : cats;
    setCatList(filteredCatList);
  }, [search]);

  useEffect(() => {
    setCatList(cats);
  }, [cats]);

  const onHandleSearch = (text) => {
    setSearch(text);
  };

  const onHandleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
    0;
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const onHandleDelete = (catId) => {
    dispatch(removeCat(catId));
    onCloseModal();
  };

  const getCatColor = (cat) => {
    return catColors.find((catColor) => catColor.id === cat.mainColor);
  };

  const getCatCountry = (cat) => {
    return countries.find((country) => country.id === cat.country).name;
  };

  const selectCat = (cat, color) => {
    dispatch(selectedCat(cat, color));
    navigation.navigate("Item", {
      name: cat.name,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.addItemContainer}>
          <TextInput
            placeholder="search cat"
            style={styles.input}
            onChangeText={onHandleSearch}
            value={search}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={catList}
          renderItem={({ item }) => (
            <ListItem
              cat={item}
              onCloseModal={onCloseModal}
              onHandleModal={onHandleModal}
              selectCat={selectCat}
              catColor={getCatColor(item)}
              catCountry={getCatCountry(item)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal
        isVisible={modalVisible}
        actionDeleteItem={() => onHandleDelete(itemSelected.id)}
        itemSelected={itemSelected}
        onCloseModal={onCloseModal}
      />
    </View>
  );
};

export default List;
