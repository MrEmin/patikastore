import React from 'react';
import {View, StyleSheet, FlatList, Text, TextInput} from 'react-native';
import Card from './components/Card';

import product_data from './product.json';

function App() {
  const renderItem = ({item}) => <Card product={item} />;
  const keyExtractorProduct = (item, index) => item.id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara.." />
      <FlatList
        data={product_data}
        numColumns={2}
        keyExtractor={keyExtractorProduct}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 120,
  },
  header: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 5,
  },
  input: {
    borderRadius: 15,
    backgroundColor: '#ECEFF1',
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
