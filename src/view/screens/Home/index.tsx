import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, View, FlatList, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {ThemeContext} from '../../../../App';
import {productHelpers} from '../../../helpers/productHelpers';
import store from '../../../store';
import {productActions, productsSelectors} from '../../../store/productSlices';
import styles from './styles';

const renderItem = ({item: {item}, theme}) => {
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
  const data = useSelector(productsSelectors.products);
  const pTs = useSelector(productsSelectors.productTimings);
  const hotdeals = useSelector(productsSelectors.hotdeals);
  const theme = React.useContext(ThemeContext);

  const getProductsData = useCallback(() => {
    store.dispatch(productActions.getProductsAT());
    store.dispatch(productActions.getProductsTimingAT());
    store.dispatch(productActions.getHotDealsAT());
  }, [store]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  console.log('hotdeals', hotdeals);

  useEffect(() => {
    if (data?.data && pTs?.data) {
      productHelpers.productsSortedByTime(data.data, pTs.data);
      // console.log('first', first)
    }
  }, [data.data, pTs.data]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      <FlatList
        data={data?.data}
        renderItem={(item) => renderItem({item, theme})}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
