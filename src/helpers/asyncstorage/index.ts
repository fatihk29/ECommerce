import AsyncStorage from '@react-native-async-storage/async-storage';

const saveDataToStorage = async (themeType: string) => {
  try {
    return await AsyncStorage.setItem('themeType', themeType);
  } catch (error) {
    // console.log("Error");
  }
};

const readDataFromStorage = async () => {
  try {
    const val = await AsyncStorage.getItem('themeType');
    return val;
  } catch (error) {
    // console.log("Error");
    return 'light';
  }
};

export {saveDataToStorage, readDataFromStorage};
