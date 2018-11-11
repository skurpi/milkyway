import React, { Component } from "react";
import { View, TextInput, Button, Text } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import Header from "./Header";

function handleDate(date) {
  return typeof date === "string" ? date : date.toString();
}

export default class FeedLogger extends Component {
  constructor(props) {
    super(props);
    this.state = { isDateTimePickerVisible: false, date: "No date selected" };

    this.showTimePicker = () =>
      this.setState({ isDateTimePickerVisible: true });

    this.hideTimePicker = () =>
      this.setState({ isDateTimePickerVisible: false });

    this.handleDatePicked = date => {
      this.setState({ date: date.toString(), isDateTimePickerVisible: false });
    };
  }

  render() {
    return (
      <>
        <Header>Add feed</Header>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>{handleDate(this.state.date)}</Text>
          <Button
            onPress={this.showTimePicker}
            title="Started feeding"
            color="#841584"
            accessibilityLabel="Choose the time that the feeding started"
          />
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
        <DateTimePicker
          mode={"time"}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideTimePicker}
        />
      </>
    );
  }
}
