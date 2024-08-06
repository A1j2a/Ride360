import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {colors} from '../../assets/colors/colors';
import {images} from '../../assets/images';
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
} from '../../global/GConstant';
import {styles} from './style';

const Favorites = (props: any) => {
  const [favorites, setFavorites] = useState({
    recommended: [],
    popularClasses: [],
  });

  useEffect(() => {
    getData('favorites', (storedFavorites: any) => {
      console.log('data ==>', storedFavorites);
      setFavorites(storedFavorites || {recommended: [], popularClasses: []});
    });
  }, []);

  // removeFavorite function

  const removeFavorite = async (itemId: string, type: any) => {
    try {
      const currentFavorites: any = (await new Promise(resolve => {
        getData(asyncStorageKey.favorites, resolve);
      })) || {recommended: [], popularClasses: []};

      const updatedFavorites: any = {...currentFavorites};
      updatedFavorites[type] = updatedFavorites[type].filter(
        (item: any) => item.id !== itemId,
      );

      await setData(asyncStorageKey.favorites, updatedFavorites);
      setFavorites(updatedFavorites);

      addToFavoritesSuccessMessage('Favorite removed successfully!');
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  // Recommended Gyms render

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity activeOpacity={opacityMain}>
      <ImageBackground
        style={[
          styles.itemContainer,
          {
            marginRight:
              index == favorites.recommended.length - 1
                ? getWidth(30)
                : getWidth(5),
          },
        ]}
        source={images.map}>
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
              onPress={() => removeFavorite(item.id, 'recommended')}>
              <Image source={images.mdi_heart} />
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
              <Text>{'Im'}</Text>
              <Text style={styles.lblRating}>{item.rating}</Text>
            </View>

            <Text style={styles.lblDate}>{item.date}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: getHeight(30),
          paddingHorizontal: getWidth(20),
        }}>
        <TouchableOpacity
          hitSlop={{bottom: 10, top: 10, left: 10, right: 10}}
          activeOpacity={opacity}
          onPress={() => {
            props.navigation.pop();
          }}>
          <Image source={images.Arrow_Left} />
        </TouchableOpacity>
        <Text
          style={[
            styles.lblTitle,
            {textAlign: 'center', marginLeft: getWidth(100), marginTop: 0},
          ]}>
          {'Favorites'}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {favorites.recommended.length <= 0 ? null : (
          <>
            <Text style={[styles.lblTitle]}>{'Recommended Gyms'}</Text>
            <FlatList
              data={favorites.recommended}
              renderItem={renderItem}
              keyExtractor={item => item?.id?.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
          </>
        )}
        {favorites.popularClasses.length <= 0 ? null : (
          <>
            <Text style={styles.lblTitle}>Popular Classes</Text>
            <View style={{paddingBottom: getHeight(20)}}>
              {favorites.popularClasses.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.vwPopularClasses,
                      {
                        marginTop: getHeight(15),
                        marginBottom:
                          index == favorites.popularClasses.length - 1
                            ? getHeight(40)
                            : 0,
                      },
                    ]}
                    activeOpacity={opacityMain}>
                    <View>
                      <Image style={styles.vwImage} source={item?.images} />
                      <TouchableOpacity
                        onPress={() =>
                          removeFavorite(item?.id, 'popularClasses')
                        }
                        style={styles.likeImagePopular}
                        activeOpacity={opacity}>
                        <Image source={images.mdi_heart} />
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
                          {item?.title}
                        </Text>
                        <Text style={styles.lblPrice}>
                          {`$${item?.price}`}
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
                            marginTop: getHeight(20),
                          },
                        ]}>
                        <Text style={styles.lblTimeandHr}>
                          {item?.location}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.vwRating,
                          {
                            marginTop: getHeight(8),
                          },
                        ]}>
                        <Text style={styles.lblTimeandHr}>{item?.time}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Favorites;
