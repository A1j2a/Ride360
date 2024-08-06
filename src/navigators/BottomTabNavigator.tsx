import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../assets/colors/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { fontFamily, fontSize, getHeight, getWidth } from "../global/GConstant";
import { images } from "../assets/images";
import { screens } from "../screens/index";

const BottomTabNavigator = (props: any) => {
  const Tab = createBottomTabNavigator();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <StatusBar backgroundColor={colors.gobalColour}/>
        <Tab.Navigator
          initialRouteName={props.initialRouteName}
          screenOptions={{
            tabBarStyle: {
              height: getHeight(84),
              justifyContent: "center",
              borderTopWidth: 0,
              marginHorizontal:getWidth(16),
              position:"absolute",
              paddingTop: Platform.OS == "ios" ? null : getHeight(10),
              borderRadius:50,
              bottom:10
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
                    { color: focused ? colors.gobalColour : "gray" },
                  ]}
                >
                  {"Home"}
                </Text>
              ),
              tabBarIcon: ({ color, size, focused }: any) => (
                <Image
                tintColor={focused ? colors.gobalColour:"gray"}
                style={style.imageStyle}
                source={images.home}
              />
              ),
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
                    { color: focused ? colors.gobalColour : "gray" },
                  ]}
                >
                  {"Rides"}
                </Text>
              ),
              tabBarIcon: ({ color, size, focused }: any) => (
                <Image
                  tintColor={focused && colors.gobalColour}
                  style={[style.imageStyle ,{width:getWidth(28)}]}
                  source={images.Rides}
                />
              ),
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
                    { color: focused ? colors.gobalColour : "gray" },
                  ]}
                >
                  {"Profile"}
                </Text>
              ),
              tabBarIcon: ({ color, size, focused }: any) => (
                <Image
                tintColor={focused ? colors.gobalColour:"gray"}
                style={style.imageStyle}
                source={images.user}
              />
              ),
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
        fontSize: fontSize.size14,
        paddingBottom: Platform.OS == "ios" ? null : getHeight(20),
        textAlign: "center",
        fontFamily: fontFamily.Medium,
        // marginBottom:getHeight(-3)
      },
      imageStyle: {
        height: getHeight(24),
        width:getWidth(25)
        // aspectRatio: 1,
      },
})