import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../data/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Menu from './Menu';
import menu from '../state/menu';
import {observer} from 'mobx-react-lite';

const TopLine = ({navigation}) => {
  return (
    <View style={styles.cont}>
      {menu.show && <Menu navigation={navigation} />}
      <TouchableOpacity onPress={() => menu.change()}>
        <FontAwesomeIcon icon={'bars'} color={'#fff'} size={30} />
      </TouchableOpacity>
      <Text style={styles.text}>LX Best Sports Pub</Text>
      <TouchableOpacity onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-basket'} color={'#fff'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 35,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    position: 'relative',
    zIndex: 99,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default observer(TopLine);
