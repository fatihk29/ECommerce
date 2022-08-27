import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addMuffin, deleteMuffin} from '../../../store/muffinSlice';
import {userActions, productsSelectors} from '../../../store/productSlices';

import store from '../../../store';

import styles from './styles';

const ProfileScreen = () => {
  const muffinList = useSelector(productsSelectors.products);

  const onLogin = async () => {
    store.dispatch(userActions.getProductsAT());
  };

  console.log('muffinList', muffinList);
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
