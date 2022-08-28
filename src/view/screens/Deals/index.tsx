import React, {FC, useEffect, useState, useCallback} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import MasonryList from '@react-native-seoul/masonry-list';

import {ITheme} from '../../../types';
import {ThemeContext} from '../../../../App';
import {productActions, productsSelectors} from '../../../store/productSlices';
import HottestDealsItem from '../../components/HottestDealsItem';
import {productHelpers} from '../../../helpers/productHelpers';
import store from '../../../store';
import styles from './styles';

const DealsScreen: FC = () => {
  const [hottestDealsData, setHottestDealsData] = useState<any>();
  const theme = React.useContext<ITheme>(ThemeContext);
  const data = useSelector(productsSelectors.products);
  const pTs = useSelector(productsSelectors.productTimings);

  const getHotDealsData = useCallback(() => {
    store.dispatch(productActions.getHotDealsAT());
  }, [store]);

  useEffect(() => {
    getHotDealsData();
  }, [getHotDealsData]);

  useEffect(() => {
    if (data?.data && pTs?.data) {
      let val = productHelpers.productsSortedByTime(data.data, pTs.data);
      setHottestDealsData(val);
    }
  }, [data.data, pTs.data]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      {hottestDealsData?.length > 0 ? (
        <MasonryList
          style={{alignSelf: 'stretch'}}
          contentContainerStyle={{
            paddingHorizontal: 18,
            alignSelf: 'stretch',
          }}
          numColumns={2}
          data={hottestDealsData}
          renderItem={(item) => HottestDealsItem({item, theme})}
        />
      ) : (
        <Text style={[styles.emptyMasonryList, {color: theme.theme.color}]}>
          There is an error
        </Text>
      )}
    </SafeAreaView>
  );
};

export default DealsScreen;
