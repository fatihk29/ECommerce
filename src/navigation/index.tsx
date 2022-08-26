import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
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

import HomeScreen from '../view/screens/Home';
import DealsScreen from '../view/screens/Deals';
import BasketScreen from '../view/screens/Basket';
import ProfileScreen from '../view/screens/Profile';
import {
  HeaderMidTitle,
  HeaderRightTitle,
} from '../view/components/NavigationHeader';
import {ThemeContext} from '../../App';
import styles from './style';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const darkGrey = '#777';

function BottomTabNavigator({navigation}) {
  const theme = React.useContext(ThemeContext);
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
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{drawerPosition: 'right'}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="DrawerNavigation"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const theme = React.useContext(ThemeContext);
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity
        style={[
          styles.menuContainer,
          {backgroundColor: theme.theme.backgroundColor},
        ]}
        onPress={() => {
          theme.toggleTheme();
        }}>
        <MCI name="theme-light-dark" size={30} color={darkGrey} />
        <Text style={[styles.themeText, {color: theme.theme.color}]}>
          {theme.themeType === 'dark' ? 'Dark Theme' : 'Light Theme'}
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const AppNavigator = () => {
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
