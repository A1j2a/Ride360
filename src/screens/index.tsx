// import WelcomeScreen from "./Authantication/WelcomeScreen";

import BottomTabNavigator from '../navigators/BottomTabNavigator';
import Home from './Bottom/Home';
import Profile from './Bottom/Profile';
import Rides from './Bottom/Rides';
import Favorites from './Favorites';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen/index';

export const screens = {
  MainScreen: MainScreen,
  Favorites: Favorites,
  Home:Home,
  Rides:Rides,
  Profile:Profile,
  LoginScreen:LoginScreen,
  BottomTabNavigator:BottomTabNavigator


};
