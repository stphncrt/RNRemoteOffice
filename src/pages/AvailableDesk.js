import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Desk} from '../components/Desk';

const AvailableDesk = () => {
  const desks = [
    {
      id: 1,
      isTaken: false,
    },
  ];
  return (
    <View>
      <Text style={styles.text}>buyrun masaniz</Text>
      <View style={styles.deskContainer}>
        <Desk />
      </View>
    </View>
  );
};

export {AvailableDesk};

const styles = StyleSheet.create({
  deskContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
