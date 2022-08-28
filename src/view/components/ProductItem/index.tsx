import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import store from '../../../store';
import {
  addProductToBasket,
  deleteProductFromBasket,
} from '../../../store/basketSlice';
import {ITheme} from '../../../types';
import styles from './styles';

interface IProductItem {
  item: any;
  theme: ITheme;
  basketProducts?: any;
}

const ProductItem: React.FC<IProductItem> = ({
  item: {item},
  theme,
  basketProducts,
}) => {

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        store.dispatch(addProductToBasket(item));
      }}>
      {basketProducts?.length > 0 &&
        basketProducts?.find((b: any) => {
          return b.id === item.id;
        }) && (
          <Text style={[styles.discount, {color: theme.theme.color}]}>
            In basket
          </Text>
        )}
      <Image style={styles.tinyLogo} source={{uri: item.image}} />
      <View style={styles.textContainer}>
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
