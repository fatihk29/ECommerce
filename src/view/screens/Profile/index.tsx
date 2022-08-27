import React, {FC} from 'react';
import {Text, View} from 'react-native';

import {ThemeContext} from '../../../../App';
import {ITheme} from '../../../types';
import styles from './styles';

const ProfileScreen: FC = () => {
  const theme = React.useContext<ITheme>(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme.theme.backgroundColor},
      ]}>
      <Text style={[styles.profileText, {color: theme.theme.color}]}>
        Name Surname
      </Text>
    </View>
  );
};

export default ProfileScreen;
