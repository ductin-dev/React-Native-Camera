import React, { Component } from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import NavigateBar from "../component/NavigateBar";

export default class CAMERA extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigateBar navigation={this.props.navigation} />
        <Text>No camera found ! at n/a</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
  },
  navigate: {
    top: 0,
  },
});
