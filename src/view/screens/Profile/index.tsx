import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {userActions, productsSelectors} from '../../../store/productSlices';

import store from '../../../store';

import styles from './styles';

const ProfileScreen = () => {
  const muffinList = useSelector(productsSelectors.products);

  const onLogin = async () => {
    store.dispatch(userActions.getProductsAT());
  };

  return (
    <View>
      <Text>PROFILE SCREEN</Text>
      <TouchableOpacity
        onPress={() => {
          onLogin();
        }}>
        <Text>ss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
