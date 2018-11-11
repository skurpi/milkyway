import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import Header from "./Header";

function handleDate(date) {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

export default class FeedLogger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };

    this.showTimePicker = () =>
      this.setState({ isDateTimePickerVisible: true });

    this.hideTimePicker = () =>
      this.setState({ isDateTimePickerVisible: false });

    this.handleDatePicked = time => {
      this.setState({ time: Date.parse(time), isDateTimePickerVisible: false });
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    // TODO: better validation
    if (this.state.time) {
      this.props.saveFeed({ time: this.state.time, notes: this.state.notes });
    }
  }

  render() {
    return (
      <>
        <Header>Add feed</Header>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Button
            onPress={this.showTimePicker}
            title={
              this.state.time
                ? handleDate(this.state.time)
                : "When did feed start?"
            }
            color="#841584"
            accessibilityLabel="Choose a time for when the feeding started"
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Extra notes?"
            onChangeText={text => this.setState({ notes: text })}
          />
          <Button
            onPress={this.handleSave}
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
