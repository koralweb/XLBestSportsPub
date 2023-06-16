import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TopLine from '../components/TopLine';
import mainStyles from '../data/mainStyles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';

const ContactsScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <TopLine navigation={navigation} />
      <Text style={styles.title}>Контакты</Text>
      <View style={styles.item}>
        <View style={styles.blue}>
          <FontAwesomeIcon icon={'th'} color={'#fff'} size={25} />
        </View>
        <View style={styles.else}>
          <Text style={styles.itemText}>Індекс - 02000</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.blue}>
          <FontAwesomeIcon icon={'user'} color={'#fff'} size={25} />
        </View>
        <View style={styles.else}>
          <Text style={styles.itemText}>Київ, Україна, Еспланадна, 34/2</Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={styles.blue}>
          <FontAwesomeIcon icon={'phone'} color={'#fff'} size={25} />
        </View>
        <View style={styles.else}>
          <Text style={styles.itemText}>Номер - +38 050 564 33 02 </Text>
        </View>
      </View>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  item: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  blue: {
    backgroundColor: colors.blue,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  else: {
    borderWidth: 1,
    flexGrow: 1,
    marginRight: 20,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: {},
});

export default ContactsScreen;
