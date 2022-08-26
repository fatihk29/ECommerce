import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

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

const style = StyleSheet.create({
  midHeader: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
  },
  rightHeader: {
    paddingRight: 10,
    color: 'red',
  },
  leftHeaderText: {
    marginLeft: 3,
    color: '#6495ED',
  },
});
