import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem';
import {ThemeContext} from '../../../../App';

import styles from './styles';

const BasketScreen = () => {
  const theme = React.useContext(ThemeContext);
  const list = useSelector((state: any) => state.basket);

  console.log('list', list);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      <FlatList
        data={list}
        renderItem={(item) => ProductItem({item, theme})}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default BasketScreen;
