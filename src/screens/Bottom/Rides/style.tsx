import {Platform, StyleSheet, Text, View} from 'react-native';
import { colors } from '../../../assets/colors/colors';
import { fontFamily, fontSize } from '../../../global/GConstant';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gobalColour,
    justifyContent:"center",
    alignItems:"center"
  },lblTitle:{
    fontFamily:fontFamily.Bold,
    fontSize:fontSize.size20,
    color:colors.white
  }
})