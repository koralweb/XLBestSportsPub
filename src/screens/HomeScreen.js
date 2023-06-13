import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import TopLine from '../components/TopLine';
import products from '../state/products';
import Product from '../components/Shop/Product';
import mainStyles from '../data/mainStyles';

const HomeScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list.map(prod => <Product key={prod.title} prod={prod} />);
  };

  return (
    <View style={styles.mainContainer}>
      <TopLine navigation={navigation} />
      <ScrollView>{renderProducts()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
});

export default HomeScreen;
