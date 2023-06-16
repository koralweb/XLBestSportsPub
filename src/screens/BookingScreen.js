import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TopLine from '../components/TopLine';
import mainStyles from '../data/mainStyles';
import {observer} from 'mobx-react-lite';
import Booking from '../components/Booking/Booking';
import ThankYou from '../components/Booking/ThankYou';

const BookingScreen = ({navigation, route}) => {
  const [showThankYou, setShowThankYou] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <TopLine navigation={navigation} />
      {showThankYou ? (
        <ThankYou navigation={navigation} route={route} />
      ) : (
        <Booking
          navigation={navigation}
          route={route}
          setShowThankYou={setShowThankYou}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
});

export default observer(BookingScreen);
