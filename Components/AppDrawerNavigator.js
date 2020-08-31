import React from 'react';
import {
    createDrawerNavigator
} from 'react-navigation-drawer';
import {AppTabNavigator} from '../Components/AppTabNavigator';
import CustomSideBarMenu from '../Components/CustomSideBarMenu';
import SettingScreen from '../screens/SettingsScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : AppTabNavigator
        },
        Setting : {
            screen : SettingScreen
          },
      },
      {
        contentComponent:CustomSideBarMenu
      },
      {
        initialRouteName : 'Home'
      })