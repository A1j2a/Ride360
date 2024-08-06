import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {fontFamily, opacity, showMessages} from '../../../global/GConstant';
import {images} from '../../../assets/images';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ViewTop}>
        <Text style={styles.title}>
          {'Welcome '}
          <Text style={{fontFamily: fontFamily.Bold}}>{'\nBrijesh'}</Text>
        </Text>
        <TouchableOpacity
          activeOpacity={opacity}
          onPress={() => {
            showMessages('Under Development');
          }}>
          <Image source={images.Profile} />
        </TouchableOpacity>
      </View>
      <View style={styles.vwLocationMap}>
        <View style={styles.innerView}>
          <Image source={images.Location} />
          <View style={styles.vwTextInput}>
            <TextInput
              style={styles.lblTxtInput}
              placeholder="Mahavir bag society, arbudanagar, odhav"
            />
          </View>
        </View>
        <View style={styles.innerView}>
          <Image source={images.LocationOutline} />
          <View style={styles.vwTextInput}>
            <TextInput
              style={styles.lblTxtInput}
              placeholder="Titanium city center, prahladnagar, anand nagar"
            />
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Image style={styles.vwMapImage} source={images.Map}></Image>
        <TouchableOpacity
          activeOpacity={opacity}
          style={styles.vwContinue}
          onPress={() => {
            showMessages('Under Development');
          }}>
          <Text style={styles.lblvwContinue}>{'Continue'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
