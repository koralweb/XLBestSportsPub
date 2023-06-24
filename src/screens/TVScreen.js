import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TopLine from '../components/TopLine';
import mainStyles from '../data/mainStyles';
import TVList from '../data/TVList';
import colors from '../data/colors';

const today = new Date().getDate();

const TVScreen = ({navigation, route}) => {
  const renderTVList = () => {
    return TVList.filter(e => e.date >= today).map(match => (
      <View key={Math.random()}>
        <View style={styles.row}>
          <View style={styles.liga}>
            <Text style={styles.ligaText}>{match.liga}</Text>
          </View>
          <View style={styles.teams}>
            <View style={{...styles.team, ...styles.team1}}>
              <Text style={styles.teamText}>{match.t1}</Text>
            </View>
            <View style={{...styles.team, ...styles.team2}}>
              <Text style={styles.teamText}>{match.t2}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.date}>
          {match.date}.06 - {match.time}
        </Text>
      </View>
    ));
  };
  return (
    <View style={styles.mainContainer}>
      <TopLine navigation={navigation} />
      <Text style={styles.title}>Спортивні трансляції</Text>
      <ScrollView>{renderTVList()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...mainStyles,
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  liga: {
    borderWidth: 1,
    borderColor: 'silver',
    width: '40%',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  ligaText: {
    color: colors.blue,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  teams: {
    flexGrow: 1,
    overflow: 'hidden',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  team: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  team1: {
    backgroundColor: '#5281F0',
  },
  teamText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
  },
  date: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default TVScreen;
