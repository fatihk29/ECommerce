import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {ITheme} from '../../../types'
import style from './styles';

interface IHeaderRightTitle {
  navigation: any;
  theme: ITheme;
}

interface IHeaderMidTitle {
  title: string;
  theme: ITheme;
}

export const HeaderRightTitle: React.FC<IHeaderRightTitle> = ({
  navigation,
  theme,
}) => {
  return (
    <TouchableOpacity
      style={[style.rightHeader, {}]}
      onPress={() => {
        navigation.toggleDrawer();
      }}>
      <MCI name="menu" size={27} color={theme.theme.color} />
    </TouchableOpacity>
  );
};

export const HeaderMidTitle: React.FC<IHeaderMidTitle> = ({title, theme}) => {
  return (
    <View
      style={[style.midHeader, {backgroundColor: theme.theme.backgroundColor}]}>
      <Text style={[style.midHeaderText, {color: theme.theme.color}]}>
        {title}
      </Text>
    </View>
  );
};
