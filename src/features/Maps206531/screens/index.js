import React, { PureComponent } from 'react';
import { Button, View, Platform, StyleSheet } from 'react-native';

export default class Root extends PureComponent {
  static navigationOptions = {
    title: 'Maps'.toUpperCase(),
    headerBackTitle: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Maps')}
          style={styles.item}
          title="Maps" />

        <Button
          onPress={() => this.props.navigation.navigate('SplashScreen')}
          style={styles.item}
          title="Main Menu" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  statusbar: {
    height: Platform.select({ ios: 20, android: 0 }),
  },
  item: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: 'gray',
  },
});
