import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
  midHeader: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  midHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
  },
  rightHeader: {
    paddingRight: 10,
    color: 'red',
  },
  leftHeaderText: {
    marginLeft: 3,
    color: '#6495ED',
  },
});

export default style