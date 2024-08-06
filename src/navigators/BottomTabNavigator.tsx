import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../assets/colors/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fontFamily, fontSize, getHeight, getWidth } from "../global/GConstant";
import { images } from "../assets/Images";
import { screens } from "../screens/index";

const BottomTabNavigator = (props: any) => {
  const Tab = createBottomTabNavigator();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <Tab.Navigator
          initialRouteName={props.initialRouteName}
          screenOptions={{
            tabBarStyle: {
              height: getHeight(84),
              justifyContent: "center",
              borderTopWidth: 1,
              paddingTop: Platform.OS == "ios" ? null : getHeight(10),
              // paddingBottom:Platform.OS == 'ios' ? getHeight(10):getHeight(10),
              //
            },
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIconStyle: {},
            tabBarLabelPosition: "below-icon",
          }}
        >
          <Tab.Screen
            name="Home"
            component={screens.Home}
            options={{
              tabBarLabel: ({ focused }: any) => (
                <Text
                  style={[
                    style.lblTitle,
                    // { color: focused ? colors.globalMainColor : "gray" },
                  ]}
                >
                  {"Home"}
                </Text>
              ),
            //   tabBarIcon: ({ color, size, focused }: any) => (
            //     <Image
            //       style={style.imageStyle}
            //       source={focused ? images.Home : images.HomeUnFocus}
            //     />
            //   ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Rides"
            component={screens.Rides}
            options={{
              tabBarLabel: ({ focused }: any) => (
                <Text
                  style={[
                    style.lblTitle,
                    // { color: focused ? colors.globalMainColor : "gray" },
                  ]}
                >
                  {"Account"}
                </Text>
              ),
            //   tabBarIcon: ({ color, size, focused }: any) => (
            //     <Image
            //       tintColor={focused && colors.globalMainColor}
            //       style={style.imageStyle}
            //       source={images.Person}
            //     />
            //   ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={screens.Profile}
            options={{
              tabBarLabel: ({ focused }: any) => (
                <Text
                  style={[
                    style.lblTitle,
                    // { color: focused ? colors.globalMainColor : "gray" },
                  ]}
                >
                  {"Device Details"}
                </Text>
              ),
            //   tabBarIcon: ({ color, size, focused }: any) => (
            //     <Image
            //       tintColor={focused && colors.globalMainColor}
            //       style={style.imageStyle}
            //       source={images.ListDetailView}
            //     />
            //   ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BottomTabNavigator;


const style = StyleSheet.create({
    lblTitle: {
        fontSize: fontSize.size12,
        paddingBottom: Platform.OS == "ios" ? null : getHeight(20),
        textAlign: "center",
        fontFamily: fontFamily.Medium,
        // marginBottom:getHeight(-3)
      },
      imageStyle: {
        height: getHeight(20),
        aspectRatio: 1,
      },
})