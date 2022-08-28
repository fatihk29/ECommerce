import React, {FC} from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem';
import {ThemeContext} from '../../../../App';
import {ITheme} from '../../../types';
import styles from './styles';

const BasketScreen: FC = () => {
  const theme = React.useContext<ITheme>(ThemeContext);
  const basketProducts = useSelector((state: any) => state.basket);

  console.log('basket', basketProducts);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      {basketProducts?.length > 0 ? (
        <FlatList
          data={basketProducts}
          renderItem={(item) => ProductItem({item, theme})}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.emptyBasketContainer}>
          <Text style={[styles.emptyBasketText, {color: theme.theme.color}]}>
            Spetiniz boş
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BasketScreen;
