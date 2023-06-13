import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../data/colors';
import products from '../../state/products';
import {observer} from 'mobx-react-lite';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CounterAddBtn = ({prod: {id, cnt, added}}) => {
  const [count, setCount] = useState(cnt);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const addProduct = () => {
    products.addProduct(id, count);
  };

  return (
    <View style={styles.row}>
      <View style={styles.counter}>
        <TouchableOpacity onPress={dec}>
          <Text style={styles.white}>-</Text>
        </TouchableOpacity>
        <Text style={styles.white}>{count}</Text>
        <TouchableOpacity onPress={inc}>
          <Text style={styles.white}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={addProduct}>
        {added ? (
          <FontAwesomeIcon size={20} icon={'check'} color={'#fff'} />
        ) : (
          <Text style={styles.white}>Add</Text>
        )}
      </TouchableOpacity>
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
    height: 40,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    width: '50%',
    paddingRight: 10,
  },
  white: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  addBtn: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    width: 80,
    borderRadius: 10,
    flexGrow: 1,
  },
});

export default observer(CounterAddBtn);
