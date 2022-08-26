import React from 'react';
import {SafeAreaView, View, FlatList, Text, Image} from 'react-native';

import styles from './styles';
import {SABIT, productTiming} from './const';
import {ThemeContext} from '../../../../App';

const renderItem = ({item: {item}, theme}) => {
  console.log('item', item);
  return (
    <View style={styles.item}>
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
    </View>
  );
};

const HomeScreen = () => {
  const theme = React.useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      <FlatList
        data={SABIT}
        renderItem={(item) => renderItem({item, theme})}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
