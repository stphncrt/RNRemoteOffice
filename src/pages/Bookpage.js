import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Bookpage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Rezervasyon yapmak istediginiz gunu secin..
      </Text>
      <CalendarList
        style={{
          height: 500,
          marginTop: 100,
        }}
        horizontal={false}
        pagingEnabled={true}
        calendarWidth={320}
        hideExtraDays={true}
        onDayPress={() => props.navigation.navigate('Desk')}
        theme={{todayTextColor: 'red'}}
      />
    </View>
  );
};

export {Bookpage};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#ffffff',
  },
});
