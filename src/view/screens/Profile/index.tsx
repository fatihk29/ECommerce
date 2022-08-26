import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addMuffin, deleteMuffin} from '../../../store/muffinSlice';
import {userActions} from '../../../store/productSlices';

import store from '../../../store';

import styles from './styles';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const muffinList = useSelector((state: any) => state);

  const onLogin = async () => {
    (store.dispatch(userActions.getProductsAT('')) as unknown as Promise<any>)
      .then(async (res) => {
        console.log(res);
        if (res?.payload?.token) {
          // await AsyncStorage.setItem('token', res.payload.token)
          // navigation.navigate(Screens.dashboard);
        } else {
          // alertMessage('Giriş Yapılırken bir hata olustu')
        }
      })
      .catch((err) => console.log('bağlantı hatası'));
  };

  console.log('muffinList', muffinList);
  return (
    <View>
      <Text>PROFILE SCREEN</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(addMuffin(1));
        }}>
        <Text>ss</Text>
      </TouchableOpacity>
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
