import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2,
    padding: 10,
    margin: 5,
    justifyContent: 'space-between',
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: Dimensions.get('window').width / 2.6,
    height: Dimensions.get('window').height / 3.4,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#808080',
  },
  inStock: {
    fontWeight: 'bold',
    color: '#FF0000',
    fontSize: 18,
  },
});
