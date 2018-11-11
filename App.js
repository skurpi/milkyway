import React from "react";
import { View, SafeAreaView, Platform } from "react-native";

import { Title, LatestFeeds, FeedLogger } from "./ui-components";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [
        { day: "Monday", feeds: [{ time: "2018-11-11T16:05:00.000Z" }] },
        {
          day: "Sunday",
          feeds: [
            { time: "2018-11-10T22:35:00.000Z" },
            { time: "2018-11-10T16:25:00.000Z", note: "amazing feed" },
            { time: "2018-11-10T07:15:00.000Z" }
          ]
        }
      ] //todo get pre-sorted and grouped from database
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
