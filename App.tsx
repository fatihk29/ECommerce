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
import {StatusBar} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {
  saveDataToStorage,
  readDataFromStorage,
} from './src/helpers/asyncstorage';
import store from './src/store';
import AppNavigator from './src/navigation';
import {ITheme, IThemeType} from './src/types';

const themes = {
  light: {backgroundColor: '#fff', color: '#000'},
  dark: {backgroundColor: '#202020', color: '#fff'},
};

export const ThemeContext = React.createContext<ITheme>({
  theme: themes.light,
  themeType: 'light',
  toggleTheme: () => {},
});

const App = () => {
  const [themeType, setThemeType] = React.useState<IThemeType>('light');

  async function toggleTheme() {
    return setThemeType(themeType === 'light' ? 'dark' : 'light');
  }

  const providerValue = {
    theme: themes[themeType],
    toggleTheme,
    themeType: themeType,
  };

  const storage = async () => {
    let val = await readDataFromStorage();
    if (val) {
      setThemeType(val);
    }
  };

  React.useEffect(() => {
    storage();
  }, []);

  React.useEffect(() => {
    saveDataToStorage(themeType);
  }, [themeType]);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <ThemeContext.Provider value={providerValue}>
          <StatusBar barStyle={`${themeType}-content`} />
          <AppNavigator />
        </ThemeContext.Provider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
