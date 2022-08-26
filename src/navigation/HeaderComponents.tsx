import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderRightTitle = ({navigation}) => {
  return (
    <TouchableOpacity
      style={style.rightHeader}
      onPress={() => {
        navigation.toggleDrawer();
      }}>
      <MCI name="menu" size={27} color="gray" />
    </TouchableOpacity>
  );
};

export const HeaderMidTitle = ({title}) => {
  return (
    <View style={style.midHeader}>
      <Text style={style.midHeaderText}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  midHeader: {
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
  },
  leftHeaderText: {
    marginLeft: 3,
    color: '#6495ED',
  },
});
