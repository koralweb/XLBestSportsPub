import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../data/colors';
import menu from '../state/menu';
import screenList from '../screenList';
import {useRoute} from '@react-navigation/native';

const Menu = ({navigation}) => {
  const clickMenuItem = el => {
    menu.change();
    navigation.push(el.name);
  };

  const renderMenuList = () => {
    return screenList.map(el => {
      if (useRoute().name !== el.name) {
        return (
          <TouchableOpacity
            style={styles.item}
            key={el.name}
            onPress={() => clickMenuItem(el)}>
            <Text style={styles.itemText}>{el.title}</Text>
          </TouchableOpacity>
        );
      }
      return (
        <View
          style={{...styles.item, backgroundColor: '#C1D4FF'}}
          key={el.name}>
          <Text style={styles.itemText}>{el.title}</Text>
        </View>
      );
    });
  };

  return (
    <View style={styles.cont}>
      <View style={styles.box}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => menu.change()}>
            <FontAwesomeIcon
              icon={'times-circle'}
              color={colors.blue}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>{renderMenuList()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 100,
  },
  header: {
    paddingTop: 35,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  box: {
    width: '80%',
    backgroundColor: '#F2F9FF',
    height: Dimensions.get('window').height,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#fff',
    width: '80%',
    marginVertical: 10,
    paddingVertical: 10,
    paddingLeft: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemText: {
    fontSize: 20,
  },
});

export default Menu;
