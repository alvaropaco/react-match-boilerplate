import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit mollis nunc vitae dignissim.</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
		<Text>New modifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
