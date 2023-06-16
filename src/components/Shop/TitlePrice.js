import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TitlePrice = ({prod: {price, title}}) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>★ {price} грн</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: '50%',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  price: {
    color: 'green',
    fontSize: 18,
  },
});

export default TitlePrice;
