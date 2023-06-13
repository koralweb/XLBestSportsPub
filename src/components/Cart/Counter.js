import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../data/colors';
import products from '../../state/products';

const Counter = ({prod: {id, cnt, added}}) => {
  const [count, setCount] = useState(cnt);

  useEffect(() => {
    products.addProduct(id, count);
  }, [count]);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <View>
      <View style={styles.counter}>
        <TouchableOpacity onPress={dec}>
          <Text style={styles.white}>-</Text>
        </TouchableOpacity>
        <Text style={styles.white}>{count}</Text>
        <TouchableOpacity onPress={inc}>
          <Text style={styles.white}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
    width: 80,
    paddingHorizontal: 10,
    height: 30,
    borderRadius: 10,
  },
  white: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Counter;
