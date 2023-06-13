import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import TitlePrice from './TitlePrice';
import CounterAddBtn from './CounterAddBtn';

const Product = ({prod}) => {
  return (
    <View>
      <Image source={prod.image} style={styles.image} />
      <View style={styles.row}>
        <TitlePrice prod={prod} />
        <CounterAddBtn prod={prod} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Product;
