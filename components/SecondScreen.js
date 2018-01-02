import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

class SecondScreen extends Component {
  static navigationOptions = {
    title: 'second screen',
    headerStyle: { backgroundColor: '#4286f4',height:35 },
    headerTitleStyle: { color: 'white',fontSize:15,justifyContent:"center",alignSelf: 'center' },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sorry this is not the Home!
        </Text>
      </View>
    );
  }
}
export default SecondScreen;
