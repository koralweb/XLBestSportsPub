import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Counter from './Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../data/colors';
import products from '../../state/products';

const Product = ({prod}) => {
  return (
    <View style={styles.cont}>
      <Image source={prod.image} style={styles.image} />
      <View style={styles.titleCount}>
        <Text style={styles.title}>{prod.title}</Text>
        <Counter prod={prod} />
      </View>
      <View style={styles.closePrice}>
        <TouchableOpacity onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon
            icon={'times-circle'}
            color={colors.blue}
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.price}>★ {prod.price}€</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleCount: {
    justifyContent: 'space-between',
    marginLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    color: 'green',
    fontSize: 18,
  },
  closePrice: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Product;
