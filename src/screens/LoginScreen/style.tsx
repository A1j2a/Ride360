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
    height: 100,
    flex: 1,
    borderTopRightRadius:50,
    borderTopLeftRadius:50
  },
});
