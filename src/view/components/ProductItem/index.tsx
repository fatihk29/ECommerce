import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import store from '../../../store';
import {
  addProductToBasket,
  deleteProductFromBasket,
} from '../../../store/basketSlice';
import styles from './styles';

const ProductItem = ({item: {item}, theme}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        store.dispatch(addProductToBasket(item));
      }}>
      <Image style={styles.tinyLogo} source={{uri: item.image}} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={[styles.discount, {color: theme.theme.color}]}>
          {item.discount}
          {'%OFF'}
        </Text>
        <Text style={[styles.name, {color: theme.theme.color}]}>
          {item.name}
        </Text>
        <Text style={[styles.price, {color: theme.theme.color}]}>
          {'$'}
          {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
