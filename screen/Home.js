import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import NavigateBar from "../component/NavigateBar";

export default class CAMERA extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <NavigateBar
          style={styles.navigate}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkorange",
    alignItems: "center",
  },
  navigate: {
    paddingTop: 20,
  },
});
