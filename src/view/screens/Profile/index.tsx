import React from 'react';
import {Text, View} from 'react-native';

import {ThemeContext} from '../../../../App';
import styles from './styles';

const ProfileScreen = () => {
  const theme = React.useContext(ThemeContext);
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
