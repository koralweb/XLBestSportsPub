import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopLine from '../components/TopLine';
import mainStyles from '../data/mainStyles';
import products from '../state/products';
import Product from '../components/Cart/Product';
import colors from '../data/colors';
import {observer} from 'mobx-react-lite';

const CartScreen = ({navigation}) => {
  const totalPrice = () => {
    return products.list
      .filter(el => el.added)
      .reduce((acc, el) => {
        return acc + el.price * el.cnt;
      }, 0);
  };
  console.log('test output');
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => <Product key={prod.id} prod={prod} />);
  };

  const addedExists = products.list.some(e => e.added);

  return (
    <View style={styles.mainContainer}>
      <TopLine navigation={navigation} />
      <Text style={styles.title}>Кошик {addedExists && '- ваш заказ:'}</Text>
      {addedExists ? (
        <ScrollView>
          {renderProducts()}
          <View style={styles.totalPrice}>
            <Text style={styles.totalText}>Сумма: {totalPrice()} грн</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Booking', {cart: true})}>
            <Text style={styles.btnText}>Оформити</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Text style={styles.emptyCart}>Ваш кошик порожній</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  totalPrice: {
    borderTopWidth: 1,
    marginHorizontal: 20,
    marginTop: 10,
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 20,
    fontWeight: '700',
  },
  emptyCart: {
    fontSize: 25,
    textAlign: 'center',
    color: 'grey',
  },
  btn: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default observer(CartScreen);
