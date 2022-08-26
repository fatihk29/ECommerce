import React from 'react';
import {SafeAreaView, View, FlatList, Text, Image} from 'react-native';

import styles from './styles';
import {SABIT, productTiming} from './const';

const renderItem = ({item}) => {
  // console.log('item', item);
  return (
    <View style={styles.item}>
      <Image style={styles.tinyLogo} source={{uri: item.image}} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={styles.discount}>
          {item.discount}
          {'%OFF'}
        </Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>
          {'$'}
          {item.price}
        </Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SABIT}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
