import React from "react";
import { Constants } from "expo";
import { View, SafeAreaView, Platform } from "react-native";

import Title from "./Title";
import LatestFeeds from "./LatestFeeds";
import FeedLogger from "./FeedLogger";

export default function Layout({ feeds, handleSaveFeed }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0
      }}
    >
      <View style={{ flex: 1, alignItems: "center" }}>
        <Title>Boobtracker</Title>
        <LatestFeeds feeds={feeds} />
        <FeedLogger saveFeed={handleSaveFeed} />
      </View>
    </SafeAreaView>
  );
}
