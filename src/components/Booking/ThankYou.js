import React, {useEffect} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import mainStyles from '../../data/mainStyles';
import {observer} from 'mobx-react-lite';
import products from '../../state/products';

const ThankYou = ({navigation, route}) => {
  useEffect(() => {
    if (route.params) {
      products.removeAllProducts();
    }
  }, []);
  return (
    <>
      <Text style={styles.title}>Дякуємо за ваше замовлення</Text>
      <Text style={styles.desc}>
        Наші менеджери зв'яжуться з вами найближчим часом
      </Text>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  desc: {
    textAlign: 'center',
    fontSize: 18,
    color: 'grey',
    paddingHorizontal: 20,
  },
});

export default observer(ThankYou);
