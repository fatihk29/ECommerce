/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';

import AppNavigator from './src/navigation';

const themes = {
  light: {backgroundColor: '#fff', color: '#000'},
  dark: {backgroundColor: '#000', color: '#fff'},
};

export const ThemeContext = React.createContext<any>(null);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = React.useState('light');

  const providerValue = {theme: themes[theme], toggleTheme, themeType: theme};

  function toggleTheme() {
    return setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <ThemeContext.Provider value={providerValue}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppNavigator />
        </ThemeContext.Provider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
