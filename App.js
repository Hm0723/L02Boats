import React from 'react';
import AllBoats from './components/AllBoats';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontWeight:'bold', textAlign:'center', color:'black', fontSize:24, borderWidth:3}}>
        GetABoat - For Sale
      </Text>
      <AllBoats />
    </View>
  );
};

export default App;
