import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

import style from './styles';

export const HeaderRightTitle = ({navigation, theme}) => {
  return (
    <TouchableOpacity
      style={[style.rightHeader, {}]}
      onPress={() => {
        navigation.toggleDrawer();
      }}>
      <MCI name="menu" size={27} color={theme.theme.color} />
    </TouchableOpacity>
  );
};

export const HeaderMidTitle = ({title, theme}) => {
  return (
    <View
      style={[style.midHeader, {backgroundColor: theme.theme.backgroundColor}]}>
      <Text style={[style.midHeaderText, {color: theme.theme.color}]}>
        {title}
      </Text>
    </View>
  );
};
