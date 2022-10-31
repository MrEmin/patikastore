import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.inStock}>{product.inStock ? '' : 'STOKTA YOK'}</Text>
    </View>
  );
};

export default Card;
