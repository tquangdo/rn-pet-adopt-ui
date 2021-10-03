import React from 'react';
import {
  Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';
import pets from '../../const/pets';
const { height } = Dimensions.get('window');
const petCategories = [
  { name: 'Mèo', icon: 'cat' },
  { name: 'Chó', icon: 'dog' },
  { name: 'Chim', icon: 'ladybug' },
  { name: 'Thỏ', icon: 'rabbit' },
];

const Card = ({ pet, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', pet)}>
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
          <Image
            source={pet.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text
              style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 20 }}>
              {pet?.name}
            </Text>
            <Icon name="gender-male" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
          <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
            {pet?.type}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.grey }}>
            {pet?.age}
          </Text>

          {/* Render distance and the icon */}
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{ fontSize: 12, color: COLORS.grey, marginLeft: 5 }}>
              Khoảng cách:7.8km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const [staSelectedCategoryIndex, setStaSeletedCategoryIndex] = React.useState(0);
  const [staFilteredPets, setStaFilteredPets] = React.useState([]);

  const _fliterPet = index => {
    const current_pets = pets.filter(
      item => item?.pet?.toUpperCase() == petCategories[index].name.toUpperCase(),
    )[0]?.pets;
    setStaFilteredPets(current_pets);
  };

  React.useEffect(() => {
    _fliterPet(0);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
      <View style={style.header}>
        <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
        <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16 }}>
          DoTQ
        </Text>
        <Image
          source={{ uri: 'https://i.ibb.co/SNjFd9B/do-tranquang.jpg' }}
          style={{ height: 30, width: 30, borderRadius: 25 }}
        />
      </View>
      <View style={style.mainContainer}>
        {/* Render the search inputs and icons */}
        <View style={style.searchInputContainer}>
          <Icon name="magnify" size={24} color={COLORS.grey} />
          <TextInput
            placeholderTextColor={COLORS.grey}
            placeholder="Search pet to adopt"
            style={{ flex: 1 }}
          />
          <Icon name="sort-ascending" size={24} color={COLORS.grey} />
        </View>

        {/* Render all the categories */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          {petCategories.map((item, index) => (
            <View key={'pet' + index} style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  setStaSeletedCategoryIndex(index);
                  _fliterPet(index);
                }}
                style={[
                  style.categoryBtn,
                  {
                    backgroundColor:
                      staSelectedCategoryIndex == index
                        ? COLORS.primary
                        : COLORS.white,
                  },
                ]}>
                <Icon
                  name={item.icon}
                  size={30}
                  color={
                    staSelectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary
                  }
                />
              </TouchableOpacity>
              <Text style={style.categoryBtnName}>{item.name}</Text>
            </View>
          ))}
        </View>

        {/* Render the cards with flatlist */}
        <View style={{
          marginTop: 20
        }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={staFilteredPets}
            renderItem={({ item }) => (
              <Card pet={item} navigation={navigation} />
            )}
            ListFooterComponent={
              <View
                style={{ height: 300 }}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});
export default HomeScreen;
