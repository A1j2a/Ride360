import {Platform, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import {
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  screenSize,
} from '../../../global/GConstant';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gobalColour,
  },
  ViewTop: {
    marginTop: getHeight(49),
    marginHorizontal: getWidth(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.size24,
    lineHeight: getHeight(40),
    color: colors.white,
  },vwLocationMap:{
    height:getHeight(100),
    marginHorizontal:getWidth(24),
    backgroundColor:colors.globleSecond,
    marginTop:getHeight(24),
    borderRadius:18,
    padding:14,
    justifyContent:"center",
    alignItems:"center"
  },innerView:{
    flexDirection:"row",
    alignItems:"center"
  },vwTextInput:{
    borderBottomWidth:1
    ,height:getHeight(40),
    marginLeft:getWidth(8),
    borderColor:`${colors.gobalColour}30`,
    width:'90%'
  },lblTxtInput:{
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.size12,
    color:colors.blackApp
  },vwMapImage:{
    width:screenSize.width,
    resizeMode:'center',
    bottom:getHeight(-30)
  },vwContinue:{
    position:"absolute",
    alignSelf:"center",
    bottom:getHeight(140),
    backgroundColor:colors.gobalColour,
    height:getHeight(55),
    justifyContent:"center",
    alignItems:"center",
    width:getWidth(155),
    borderRadius:100,
    ...Platform.select({
      ios: {
        shadowColor: colors.gobalColour,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 16,
      },
    })
  },lblvwContinue:{
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size14,
    color:colors.white
  }
});
