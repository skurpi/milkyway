import React from "react";
import { View, SafeAreaView, Platform } from "react-native";

import { Title, LatestFeeds, FeedLogger } from "./ui-components";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [{ key: 0, day: "Monday" }, { key: 1, day: "Sunday" }] //todo get from database
    };
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 25 : 0
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Title>Boobtracker</Title>
          <LatestFeeds feeds={this.state.feeds} />
          <FeedLogger
            saveFeed={() => {
              console.log("todo");
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
