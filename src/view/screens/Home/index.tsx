import React, {useEffect, useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {ThemeContext} from '../../../../App';
import {productHelpers} from '../../../helpers/productHelpers';
import store from '../../../store';
import {productActions, productsSelectors} from '../../../store/productSlices';
import styles from './styles';
import ProductItem from '../../components/ProductItem';

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


  const list = useSelector((state: any) => state.basket);

  console.log('list', list);

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
        renderItem={(item) => ProductItem({item, theme})}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
