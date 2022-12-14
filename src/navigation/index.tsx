import React, {FC} from 'react';
import {Switch, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../view/screens/Home';
import DealsScreen from '../view/screens/Deals';
import BasketScreen from '../view/screens/Basket';
import ProfileScreen from '../view/screens/Profile';
import {
  HeaderMidTitle,
  HeaderRightTitle,
} from '../view/components/NavigationHeader';
import {ThemeContext} from '../../App';
import {ITheme} from '../types';
import styles from './style';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const darkGrey = '#777';

const BottomTabNavigator: FC<any> = ({navigation}) => {
  const theme = React.useContext<ITheme>(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#6495ED',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: (item) => {
            return (
              <Fontisto
                name="home"
                size={25}
                color={item.focused ? item.color : darkGrey}
              />
            );
          },
          headerStyle: {
            backgroundColor: theme.theme.backgroundColor,
          },
          headerTitle: () => <HeaderMidTitle title={'Deals'} theme={theme} />,
          headerRight: () => (
            <HeaderRightTitle navigation={navigation} theme={theme} />
          ),
        }}
      />
      <Tab.Screen
        name="deals"
        component={DealsScreen}
        options={{
          tabBarIcon: (item) => (
            <Fontisto
              name="ticket"
              size={25}
              color={item.focused ? item.color : darkGrey}
            />
          ),
          headerStyle: {
            backgroundColor: theme.theme.backgroundColor,
          },
          headerTitle: () => (
            <HeaderMidTitle title={'Hottest Deals'} theme={theme} />
          ),
          headerRight: () => (
            <HeaderRightTitle navigation={navigation} theme={theme} />
          ),
        }}
      />
      <Tab.Screen
        name="basket"
        component={BasketScreen}
        options={{
          tabBarIcon: (item) => (
            <FontAwesome5
              name="shopping-basket"
              size={30}
              color={item.focused ? item.color : darkGrey}
            />
          ),
          headerStyle: {
            backgroundColor: theme.theme.backgroundColor,
          },
          headerTitle: () => <HeaderMidTitle title={'Basket'} theme={theme} />,
          headerRight: () => (
            <HeaderRightTitle navigation={navigation} theme={theme} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (item) => (
            <Fontisto
              name="person"
              size={30}
              color={item.focused ? item.color : darkGrey}
            />
          ),
          headerStyle: {
            backgroundColor: theme.theme.backgroundColor,
          },
          headerTitle: () => <HeaderMidTitle title={'Profile'} theme={theme} />,
          headerRight: () => (
            <HeaderRightTitle navigation={navigation} theme={theme} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 200,
        },
      }}>
      <Drawer.Screen
        name="DrawerNavigation"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent: FC<any> = (props) => {
  const theme = React.useContext<ITheme>(ThemeContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={[styles.menuContainer]}>
        <MCI name="weather-night" size={35} color={darkGrey} />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme.themeType === 'dark' ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={theme.toggleTheme}
          value={theme.themeType === 'dark' ? true : false}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Stack"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
