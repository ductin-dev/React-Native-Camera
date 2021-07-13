import React, { Component } from "react";
import { StyleSheet, Text, Button, Platform } from "react-native";

export default class NavigateBar extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { platform_name: "web", platform_color: "red" } };
  }
  componentDidMount() {
    let platform = Platform.OS;
    this.setState({
      data: {
        platform_name: platform,
        platform_color:
          platform == "web"
            ? "red"
            : platform == "android"
            ? "forestgreen"
            : "blue",
      },
    });
  }
  render() {
    return (
      <>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text
          style={
            ({ paddingTop: 20 },
            { fontWeight: 600 },
            { color: this.state.data.platform_color })
          }
        >
          You are using {this.state.data.platform_name} ?
        </Text>

        <Text></Text>
        <Button
          style={styles.button}
          title="Go to abc"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Text></Text>
        <Button
          style={styles.button}
          title="Check flatform"
          onPress={() => this.props.navigation.navigate("NON")}
        />
        <Text></Text>
        <Button
          style={styles.button}
          title="Go to CAMERA"
          onPress={() => this.props.navigation.navigate("CAMERA")}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
  },
});
