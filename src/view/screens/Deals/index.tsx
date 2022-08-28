import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import MasonryList from '@react-native-seoul/masonry-list';

import {ITheme} from '../../../types';
import {ThemeContext} from '../../../../App';
import {productsSelectors} from '../../../store/productSlices';
import HottestDealsItem from '../../components/HottestDealsItem';
import styles from './styles';

const DealsScreen: FC = () => {
  const theme = React.useContext<ITheme>(ThemeContext);
  const data = useSelector(productsSelectors.products);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      <MasonryList
        style={{alignSelf: 'stretch'}}
        contentContainerStyle={{
          paddingHorizontal: 18,
          alignSelf: 'stretch',
        }}
        numColumns={2}
        data={data?.data}
        renderItem={(item) => HottestDealsItem({item, theme})}
      />
    </SafeAreaView>
  );
};

export default DealsScreen;
