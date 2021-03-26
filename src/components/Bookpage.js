import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Bookpage = () => {
  return (
    <View>
      <Text style={styles.text}>Bookpage </Text>
      <CalendarList
        horizontal={true}
        pagingEnabled={true}
        calendarWidth={320}
      />
    </View>
  );
};

export default Bookpage;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
