import React, {FC, useEffect, useCallback} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {ThemeContext} from '../../../../App';
import {productHelpers} from '../../../helpers/productHelpers';
import store from '../../../store';
import {productActions, productsSelectors} from '../../../store/productSlices';
import ProductItem from '../../components/ProductItem';
import {ITheme} from '../../../types';
import styles from './styles';

const HomeScreen: FC = () => {
  const theme = React.useContext<ITheme>(ThemeContext);
  const data = useSelector(productsSelectors.products);
  const pTs = useSelector(productsSelectors.productTimings);
  const hotdeals = useSelector(productsSelectors.hotdeals);

  const getProductsData = useCallback(() => {
    store.dispatch(productActions.getProductsAT());
    store.dispatch(productActions.getProductsTimingAT());
    store.dispatch(productActions.getHotDealsAT());
  }, [store]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const basketProducts = useSelector((state: any) => state.basket);

  // console.log('list', basketProducts);

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
        renderItem={(item) => ProductItem({item, theme, basketProducts})}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
