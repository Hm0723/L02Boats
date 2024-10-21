import React from 'react';
import AllBoats from './components/AllBoats';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text>
        GetABoat - For Sale
      </Text>
      <AllBoats />
    </View>
  );
};

export default App;
