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
    backgroundColor: colors.white,
  },
  vwHeader: {
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
    width: screenSize.width,
    paddingVertical: getHeight(20),
    // height: getHeight(80),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 16,
      },
    }),
  },
  vwHeaderSecond: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
  },
  lblTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size22,
    marginLeft: getWidth(20),
    marginTop: getHeight(20),
    color: colors.black,
  },
  listContainer: {
    marginLeft: getWidth(10),
    marginTop: getHeight(15),
    paddingBottom: getHeight(40),
  },
  itemContainer: {
    height: getHeight(260),
    width: getWidth(200),
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size18,
    marginLeft: getWidth(8),
    color: colors.black,
  },
  lblPrice: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size12,
    color: colors.blue,
  },

  vwSubView: {
    position: 'absolute',
    backgroundColor: colors.white,
    paddingBottom: getHeight(10),
    width: getWidth(200),
    borderRadius: 12,
    bottom: getHeight(-20),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  vwImageStyle: {
    height: getHeight(130),
    width: getWidth(200),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  likeImage: {
    alignSelf: 'flex-end',
    height: 20,
    aspectRatio: 1,
    position: 'absolute',
    right: getWidth(10),
    top: getHeight(10),
  },
  lblTextField: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: getHeight(10),
    justifyContent: 'space-between',
    marginRight: getWidth(8),
  },
  lblRating: {
    fontFamily: fontFamily.Regular,
    fontSize: fontSize.size12,
    marginLeft: getWidth(3),
    color: colors.grey,
  },
  lblDate: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size12,
    marginLeft: getWidth(3),
    color: `${colors.black}60`,
  },
  vwRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: getWidth(8),
  },
  vwWorkougth: {
    backgroundColor: colors.white,
    height: getHeight(70),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: getWidth(8),
    borderRadius: 100,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.6,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  vwPopularClasses: {
    marginHorizontal: getWidth(20),
    borderRadius: 12,
    backgroundColor: colors.white,
    flexDirection: 'row',
    // alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.6,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
        
      },
    }),
  },
  vwImage: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  likeImagePopular: {
    height: 20,
    aspectRatio: 1,
    position: 'absolute',
    top: getHeight(10),
    left: getWidth(100),
  },
  lblPopularTitle: {
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.size12,
    marginLeft: getWidth(3),
    color: `${colors.black}`,
  },
  vwTextField: {
    flexDirection: 'row',
    // flex: 1,
    marginTop: getHeight(5),
    marginRight: getWidth(8),
  },
  lblDecs: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size15,
    color: `${colors.black}70`,
    marginTop: getHeight(5),
    marginLeft: getWidth(10),
  },
  lblTimeandHr: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size12,
    color: `${colors.black}60`,
    marginLeft:getWidth(5)
  },
  vwSearchMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vwSearch: {
    height: getHeight(55),
    backgroundColor: colors.white,
    borderRadius: 12,
    width: getWidth(280),
    alignSelf: 'flex-end',
    paddingHorizontal: getWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  bacKArrow: {
    marginRight: getWidth(20),
    marginLeft: getWidth(10),
  },
  txtInput: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.size16,
    color: `${colors.black}`,
    marginLeft: getWidth(10),
    flex: 1,
  },
});
