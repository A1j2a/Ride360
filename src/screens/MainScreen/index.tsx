import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import {colors} from '../../assets/colors/colors';
import {
  Aerobicd,
  Box,
  ChildrenSelection,
  Dance,
  Dumbbell,
  Gym,
  images,
  Location,
  Location15,
  Map,
  Search,
  Watch,
} from '../../assets/images';
import {
  addToFavoritesSuccessMessage,
  asyncStorageKey,
  fontFamily,
  getData,
  getHeight,
  getWidth,
  opacity,
  opacityMain,
  setData,
  showAlert,
} from '../../global/GConstant';
import {useFocusEffect} from '@react-navigation/native';

const MainScreen = (props: any) => {
  const [favorites, setFavorites] = useState({
    recommended: [],
    popularClasses: [],
  });

  useFocusEffect(
    useCallback(() => {
      getData(asyncStorageKey.favorites, (storedFavorites: any) => {
        setFavorites(storedFavorites || {recommended: [], popularClasses: []});
      });
    }, []),
  );

  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [recommended, setRecommended] = useState([
    {
      id: 1,
      title: 'Gym Rebel',
      rating: 5.5,
      price: 250,
      favorite: false,
      date: '02 Aug - 25 Aug, 2020',
      imageBackground: images.gym_rebel,
    },
    {
      id: 2,
      title: 'Gym NonStop',
      rating: 3.5,
      price: 500,
      favorite: false,
      date: '01 Aug - 30 Aug, 2020',
      imageBackground: images.gym_non_stop,
    },
    {
      id: 3,
      title: 'Gym Gym',
      rating: 1.5,
      price: 150,
      favorite: false,
      date: '05 Aug - 16 Aug, 2020',
      imageBackground: images.gym_rebel,
    },
  ]);

  const [workOught, setWorkOught] = useState([
    {id: 1, backgroundChange: false, images: <Aerobicd />},
    {id: 2, backgroundChange: true, images: <Box />},
    {id: 3, backgroundChange: false, images: <ChildrenSelection />},
    {id: 4, backgroundChange: true, images: <Dance />},
    {id: 5, backgroundChange: true, images: <Gym />},
  ]);

  const [popularClasses, setPopularClasses] = useState([
    {
      id: 1,
      images: images.fitness_class,
      title: 'Fitness Class',
      price: 350,
      favorite: false,
      location: 'London, Spring st. 8',
      time: '1h 25min',
    },
    {
      id: 2,
      images: images.fitness_with_some_friends,
      title: 'Fitness with some friends',
      price: 250,
      favorite: false,
      location: 'London, Spring st. 8',
      time: '45min',
    },
    {
      id: 3,
      images: images.yoga_class,
      title: 'Yoga       Class',
      price: 150,
      favorite: false,
      location: 'London, Wellness st. 23',
      time: '25min',
    },
    {
      id: 4,
      images: images.crossfit_class,
      title: 'Crossfit Class',
      price: 200,
      favorite: false,
      location: 'London,Villers st. 1',
      time: '1h 30min',
    },
    {
      id: 5,
      images: images.fitness_class,
      title: 'Fitness Class',
      price: 350,
      favorite: false,
      location: 'London, Spring st. 8',
      time: '1h 25min',
    },
  ]);

  const [searchResults, setSearchResults] = useState({
    recommended,
    popularClasses,
  });

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      activeOpacity={opacityMain}
      onPress={() => {
        showAlert('Under development');
      }}>
      <ImageBackground
        style={[
          styles.itemContainer,
          {
            marginRight:
              index == searchResults.recommended.length - 1
                ? getWidth(30)
                : getWidth(5),
          },
        ]}
        source={images.map}>
        <View style={{alignSelf: 'center', marginTop: getHeight(10)}}>
          <Location />
        </View>
        <View style={styles.vwSubView}>
          <View>
            <Image
              style={styles.vwImageStyle}
              resizeMethod="resize"
              source={item.imageBackground}
            />
            <TouchableOpacity
              style={styles.likeImage}
              activeOpacity={opacity}
              onPress={() => toggleFavorite(item, 'recommended')}>
              <Image
                source={
                  isFavorite(item.id, 'recommended')
                    ? images.mdi_heart
                    : images.mdi_heartF
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.lblTextField}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.lblPrice}>
              {`$${item.price}`}
              <Text style={{color: colors.grey}}>{'\n/day'}</Text>
            </Text>
          </View>
          <View
            style={[
              styles.lblTextField,
              {
                marginTop: getHeight(8),
              },
            ]}>
            <View style={styles.vwRating}>
              <Image
                style={{height: getHeight(20), width: getWidth(20)}}
                source={images.Star}
              />
              <Text style={styles.lblRating}>{item.rating}</Text>
            </View>

            <Text style={styles.lblDate}>{item.date}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderWorkOughtItem = ({item, index}: any) => (
    <TouchableOpacity
      activeOpacity={opacity}
      // onPress={() => handleClick(index)}
      style={[
        styles.vwWorkougth,
        {
          backgroundColor: item.backgroundChange ? colors.blue : colors.white,
        },
      ]}>
      {item.images}
    </TouchableOpacity>
  );

  // simple effect
  const handleClick = (index: any) => {
    setWorkOught(prevState => {
      const newArr = prevState.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            backgroundChange: !item.backgroundChange,
          };
        }
        return item;
      });
      return newArr;
    });
  };

  const handleSearch = (searchTerm: any) => {
    setSearch(searchTerm.trim());
    const filteredRecommended = recommended.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    const filteredPopularClasses = popularClasses.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setSearchResults({
      recommended: filteredRecommended,
      popularClasses: filteredPopularClasses,
    });
  };

  const toggleFavorite = async (item: any, type: any) => {
    try {
      const currentFavorites = (await new Promise(resolve => {
        getData(asyncStorageKey.favorites, resolve);
      })) || {recommended: [], popularClasses: []};

      const updatedFavorites: any = {...currentFavorites};
      const list = updatedFavorites[type];

      if (list.some((fav: any) => fav.id === item.id)) {
        updatedFavorites[type] = list.filter((fav: any) => fav.id !== item.id);
        addToFavoritesSuccessMessage(
          'Item has been remove from your favorites. Please check in your profile.',
        );
      } else {
        updatedFavorites[type].push(item);
        addToFavoritesSuccessMessage(
          'Item has been added to your favorites. Please check in your profile.',
        );
      }

      await setData(asyncStorageKey.favorites, updatedFavorites);
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error updating favorites:', error);
    }
  };

  const isFavorite: any = (itemId: any, type: any) =>
    favorites[type]?.some((fav: any) => fav.id === itemId);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
      <View style={[styles.vwHeader]}>
        {isSearch ? (
          <View style={styles.vwSearchMain}>
            <TouchableOpacity
              hitSlop={{bottom: 10, top: 10, left: 10, right: 10}}
              style={styles.bacKArrow}
              activeOpacity={opacity}
              onPress={() => {
                setIsSearch(false);
                setSearch('');
                handleSearch('');
              }}>
              <Image
                style={{tintColor: colors.white}}
                source={images.Arrow_Left}
              />
            </TouchableOpacity>
            <View style={styles.vwSearch}>
              <Image style={{tintColor: colors.grey}} source={images.FSearch} />
              <TextInput
                placeholder="Search here"
                style={styles.txtInput}
                onChangeText={handleSearch}
              />
            </View>
          </View>
        ) : (
          <>
            <TouchableOpacity
              activeOpacity={opacity}
              onPress={() => {
                showAlert('Under development');
              }}>
              <Dumbbell />
            </TouchableOpacity>

            <View style={styles.vwHeaderSecond}>
              <TouchableOpacity
                activeOpacity={opacity}
                onPress={() => {
                  showAlert('Under development');
                }}>
                <Map />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={opacity}
                onPress={() => {
                  setIsSearch(true);
                }}>
                <Search />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={opacity}
                onPress={() => {
                  props.navigation.navigate('Favorites');
                }}>
                <Image
                  style={{
                    height: getHeight(30),
                    aspectRatio: 1,
                    borderRadius: 100,
                  }}
                  // resizeMode=""
                  source={images.gym_non_stop}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {!(isSearch && search == '') && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {searchResults.recommended.length > 0 && (
            <Text style={styles.lblTitle}>{'Recommended Gyms'}</Text>
          )}
          <FlatList
            data={searchResults.recommended}
            renderItem={renderItem}
            keyExtractor={item => item?.id?.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
          {searchResults.popularClasses.length > 0 && (
            <Text
              style={[
                styles.lblTitle,
                ,
                {
                  marginTop: getHeight(0),
                },
              ]}>
              {'Popular Classes'}
            </Text>
          )}
          {search != '' ? null : (
            <FlatList
              data={workOught}
              renderItem={renderWorkOughtItem}
              keyExtractor={item => item?.id?.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={[
                styles.listContainer,
                {
                  marginLeft: getWidth(12),
                  marginBottom: getHeight(0),
                  paddingTop: getHeight(5),
                  marginTop: getHeight(10),
                },
              ]}
            />
          )}

          <View style={{paddingBottom: getHeight(20)}}>
            {searchResults.popularClasses.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    showAlert('Under development');
                  }}
                  style={[
                    styles.vwPopularClasses,
                    {
                      marginTop: index == 0 && search == '' ? 0 : getHeight(15),
                      marginBottom:
                        index == workOught.length - 1 ? getHeight(40) : 0,
                    },
                  ]}
                  activeOpacity={opacityMain}>
                  <View style={{}}>
                    <Image style={styles.vwImage} source={item.images} />
                    <TouchableOpacity
                      onPress={() => toggleFavorite(item, 'popularClasses')}
                      style={styles.likeImagePopular}
                      activeOpacity={opacity}>
                      <Image
                        style={{
                          tintColor: isFavorite(item.id, 'popularClasses')
                            ? 'red'
                            : colors.grey,
                        }}
                        source={
                          isFavorite(item.id, 'popularClasses')
                            ? images.mdi_heart
                            : images.mdi_heartF
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{flex: 1}}>
                    <View style={styles.vwTextField}>
                      <Text
                        style={[
                          styles.title,
                          {
                            flex: 1,
                            marginRight: getWidth(50),
                          },
                        ]}>
                        {item.title}
                      </Text>
                      <Text style={styles.lblPrice}>
                        {`$${item.price}`}
                        <Text
                          style={{
                            color: colors.grey,
                            fontFamily: fontFamily.Regular,
                          }}>
                          {'\n/day'}
                        </Text>
                      </Text>
                    </View>
                    <Text style={[styles.lblDecs]}>{`Gym "Seven"`}</Text>
                    <View
                      style={[
                        styles.vwRating,
                        {
                          marginTop: getHeight(5),
                        },
                      ]}>
                        <Location15/>
                      <Text style={[styles.lblTimeandHr, {}]}>
                        {item.location}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.vwRating,
                        {
                          marginTop: getHeight(5),
                        },
                      ]}>
                        <Watch/>
                      <Text style={styles.lblTimeandHr}>{item.time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MainScreen;
