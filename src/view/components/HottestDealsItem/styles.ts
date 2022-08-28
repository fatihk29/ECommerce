import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    marginHorizontal: 6,
  },
  tinyLogo: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  discount: {},
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6495ED',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
});

export default styles;
