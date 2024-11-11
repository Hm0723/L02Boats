import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#5E5E5E',
    marginBottom: 10,
    fontStyle: 'italic',

  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

const Boat = ({ name, description, picture }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Icon name="ship" size={24} color="blue" style={styles.icon} />
        <Text style={styles.name}>{name}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <Image
        source={picture}
        style={styles.image}
      />
    </View>
  );
};

export default Boat;
