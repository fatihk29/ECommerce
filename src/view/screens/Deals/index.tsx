import React from 'react';
import {SafeAreaView, View, FlatList, Text, Image} from 'react-native';

import {ITheme} from '../../../types';
import {ThemeContext} from '../../../../App';
import styles from './styles';

const DealsScreen = () => {
  const theme = React.useContext<ITheme>(ThemeContext);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}></SafeAreaView>
  );
};

export default DealsScreen;
