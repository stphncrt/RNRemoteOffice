import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Desk = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/desktop.png')} />
    </View>
  );
};

export {Desk};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#000000',
  },
  image: {
    width: 100,
    height: 100,
  },
});
