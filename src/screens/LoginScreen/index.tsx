import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {colors} from '../../assets/colors/colors';
import {images} from '../../assets/images';
import {
  Email,
  getHeight,
  getWidth,
  opacity,
  showError,
  showMessages,
} from '../../global/GConstant';

const LoginScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validation = () => {
    if (email == '') {
      showError('Please enter email');
    } else if (!Email.test(email)) {
      showError('Please enter valid email');
    } else if (password == '') {
      showError('Please enter password');
    } else if (password.length < 8) {
      showError('Password should contain at least 8 characters');
    } else {
      showMessages('Login Succss');
      setTimeout(() => {
        props.navigation.navigate('BottomTabNavigator');
      }, 500);
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={colors.gobalColour} />
      <View style={styles.vWSecond}>
        <View style={{marginTop: getHeight(-100)}}>
          <Image style={styles.vwImage} source={images.Ride360Logo} />
          <Text style={styles.lblTitle}>{'Welcome'}</Text>
          <Text style={styles.lblDecs}>
            {'We make your ride fun, safe and an enjoying journey.'}
          </Text>
          <Text style={styles.txtTitle}>{'Email'}</Text>
          <View style={styles.vwTextInput}>
            <Image source={images.user} />
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              value={email}
              onChangeText={(text: any) => {
                setEmail(text.trimStart());
              }}
              style={styles.lblTextInput}
            />
          </View>
          <Text style={styles.txtTitle}>{'Password'}</Text>
          <View style={styles.vwTextInput}>
            <Image style={styles.txtIcon} source={images.Password} />
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              value={password}
              onChangeText={(text: any) => {
                setPassword(text.trimStart());
              }}
              maxLength={8}
              style={styles.lblTextInput}
            />
          </View>
          <View style={styles.vwBottom}>
            <TouchableOpacity
              onPress={validation}
              style={styles.vwLoginbtn}
              activeOpacity={opacity}>
              <Text style={styles.lblLogin}>{'Log in'}</Text>
            </TouchableOpacity>
            <View style={styles.vwSocial}>
              <TouchableOpacity
                onPress={() => {
                  showMessages('Under Development');
                }}
                activeOpacity={opacity}>
                <Image source={images.Apple} />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=>{
                showMessages("Under Development")
              }}
                style={{marginLeft: getWidth(16)}}
                activeOpacity={opacity}>
                <Image source={images.Google} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
