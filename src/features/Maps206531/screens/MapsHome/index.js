import React, { Component } from "react";
import { TextInput } from "react-native";
import { styles } from './styles'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class MapsScreen extends Component {
  constructor(props) {
    super(props);
  }

  region = {
    //customize where you want the maps to start
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  render() {
    return (
      <View style={styles.view}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.region}
        />
        <TextInput style={styles.searchbar} value="Search..." />
      </View>
    );
  }
}

