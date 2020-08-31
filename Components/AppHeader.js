import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import {AppDrawerNavigator} from '../Components/AppDrawerNavigator';
import {CustomSideBarMenu} from '../Components/CustomSideBarMenu';

const AppHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#4A148C'  onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#4A148C', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#fff"
    />
  );
};

export default AppHeader;