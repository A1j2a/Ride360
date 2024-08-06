import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { colors } from '../../assets/colors/colors'
import { images } from '../../assets/images'


const LoginScreen = (props:any) => {
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor={colors.gobalColour}/>
      <View style={styles.vWSecond}>
        <Image source={images.Ride360Logo}/>

      </View>
    </View>
  )
}

export default LoginScreen

