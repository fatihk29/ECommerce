import React, {FC} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';

const HottestDealsItem = ({item: {item}, theme}) => {
  const calcHeight = (id: number): number => {
    if (id % 4 === 1) {
      return 300;
    } else if (id % 4 === 2) {
      return 200;
    } else if (id % 4 === 3) {
      return 250;
    }
    return 275;
  };

  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Image
        style={[styles.tinyLogo, {height: calcHeight(item.id)}]}
        source={{uri: item.image}}
      />

      <Text style={[styles.name, {color: theme.theme.color}]}>{item.name}</Text>
      <View style={styles.textContainer}>
        <Text style={[styles.price]}>
          {'$'}
          {item.price}
        </Text>
        <Text style={[styles.discount, {color: theme.theme.color}]}>
          {item.discount}
          {'%OFF'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HottestDealsItem;
