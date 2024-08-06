import {Platform, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/colors/colors';
import {
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  screenSize,
} from '../../global/GConstant';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gobalColour,
  },
  vWSecond: {
    backgroundColor: `${colors.globleSecond}`,
    marginTop: getHeight(150),
    width: screenSize.width,
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  vwImage: {
    alignSelf: 'center',
  },
  lblTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size32,
    textAlign: 'center',
    color: colors.blackApp,
    marginTop: getHeight(49),
  },
  lblDecs: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.size14,
    textAlign: 'center',
    color: colors.blackApp,
    marginHorizontal: getWidth(62),
    marginTop: getHeight(24),
  },
  txtTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size14,
    marginLeft: getWidth(25),
    color: colors.black,
    marginTop: getHeight(32),
  },vwTextInput:{
    height:getHeight(55),
    marginHorizontal:getWidth(25),
    borderRadius:25,
    backgroundColor:colors.white,
    marginTop:getHeight(8),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10
  },lblTextInput:{
    fontFamily: fontFamily.Italic,
    fontSize: fontSize.size14,
    marginLeft: getWidth(11),
    color: colors.black,
    flex:1
  },txtIcon:{
    height:getHeight(14),
    width:getWidth(10)
  },vwBottom:{
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:getWidth(25),
    marginTop:getHeight(32),
    justifyContent:"space-between",
    marginBottom:getHeight(50)
  },vwLoginbtn:{
    height:getHeight(48),
    backgroundColor:colors.gobalColour,
    width:getWidth(155),
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25
  },lblLogin:{
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size14,
    color:colors.white
  },vwSocial:{
    flexDirection:"row",
    alignItems:"center"
  }
});
