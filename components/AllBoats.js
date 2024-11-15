import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Boat from './Boats';


const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#EFEFEF',
  },
});


const AllBoats = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Boat
        name="Sea Ray 500 Sundancer"
        description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
        picture={require('../img/sea_ray.jpg')}
      />
      <Boat
        name="Four Winns Horizon 180"
        description="A sporty look and refined details truly set the Horizon 180 above all others."
        picture={require('../img/four_winns.jpg')}
      />
      <Boat
        name="Flipper 640 ST"
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
        picture={require('../img/flipper.jpg')}
      />
      <Boat
        name="Princess V48"
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
        picture={require('../img/princess.jpg')}
      />
      <Boat
        name="Bayliner 175 Bowrider"
        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
        picture={require('../img/bayliner.jpg')}
      />
      <Boat
        name="Fairline Targa 47"
        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
        picture={require('../img/fairline.jpg')}
      />
    </ScrollView>
  );
};

export default AllBoats;
