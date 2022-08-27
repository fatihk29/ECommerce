import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  discount: {},
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  tinyLogo: {
    width: '100%',
    height: windowHeight * 0.22,
    borderRadius: 15,
  },
});

export default styles;
