import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bimasa</Text>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require('../assets/workspace.png')}
        />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('BookPage')}>
        <Icon name="arrow-forward" size={50} color="purple" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cfd8dc',
  },
  ImageContainer: {
    resizeMode: 'contain',
    backgroundColor: '#cfd8dc',
  },
  Image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.3,
  },
  text: {
    fontFamily: 'ubuntu',
    fontSize: 50,
    marginBottom: 30,
    color: '#f4511e',
    fontWeight: '400',
  },
});
