import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import mainStyles from '../../data/mainStyles';
import {observer} from 'mobx-react-lite';
import colors from '../../data/colors';

const Booking = ({navigation, route, setShowThankYou}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [valid, setValid] = useState(false);
  const [fromCart, setFromCart] = useState(false);

  useEffect(() => {
    if (phone) {
      setValid(true);
    }
  }, [phone, email]);

  useEffect(() => {
    if (route.params) {
      setFromCart(route.params.cart);
    }
  }, []);

  return (
    <>
      {fromCart ? (
        <Text style={styles.title}>Оформить заказ</Text>
      ) : (
        <Text style={styles.title}>Бронирование столиков</Text>
      )}
      <TextInput
        style={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={'Имя...'}
      />
      <TextInput
        style={styles.input}
        placeholder={'+ 000 000 000 000'}
        value={phone}
        onChangeText={setPhone}
        keyboardType={'numeric'}
      />
      <TextInput style={styles.input} placeholder={'Электронная почта'} />
      <TextInput style={styles.input} placeholder={'Дата и время'} />
      {valid ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowThankYou(true)}>
          <Text style={styles.btnText}>Подтвердить</Text>
        </TouchableOpacity>
      ) : (
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: colors.blue,
    marginHorizontal: '5%',
    height: 40,
    paddingLeft: 20,
    borderRadius: 15,
    marginVertical: 10,
  },
  btn: {
    width: 300,
    height: 45,
    backgroundColor: colors.blue,
    marginRight: 'auto',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default observer(Booking);
