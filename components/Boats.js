import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Boat = ({ name, description, picture }) => {
  return (
    <View style={{ padding: 10, marginBottom: 20 }}>
      {/* Boat Name and Icon */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Icon name="ship" size={24} color="#333" />
        <Text style={{
          fontSize: 20,      // Adjusted font size
          fontWeight: 'bold', // Bold font style
          fontFamily: 'sans-serif-condensed',
        }}>
          {name}
        </Text>
      </View>
      <Text style={{ fontSize: 14, color: '#5E5E5E', marginBottom: 10 }}>
        {description}
      </Text>
      <Image
        source={picture}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
      />
    </View>
  );
};

export default Boat;
