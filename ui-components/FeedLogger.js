import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

import Header from "./Header";

export default class FeedLogger extends Component {
  render() {
    return (
      <>
        <Header>Add feed</Header>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>TimePicker</Text>
          {/*https://reactnativeexample.com/a-react-native-datetime-picker-for-android-and-ios/ */}
          <TextInput
            style={{ height: 40 }}
            placeholder="Extra notes?"
            onChangeText={text => this.setState({ text })}
          />
          <Button
            onPress={this.props.saveFeed}
            title="Save"
            color="#841584"
            accessibilityLabel="Save the details of the feed"
          />
        </View>
      </>
    );
  }
}
