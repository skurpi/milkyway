import React from "react";
import { Text, View } from "react-native";
import Header from "./Header";

const colors = ["powderblue", "skyblue", "steelblue"];
function getColor(number) {
  return colors[number % colors.length];
}
export default function LatestFeeds({ feeds = [] }) {
  return (
    <>
      <Header>Latest feeds</Header>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {feeds.map((feed, index) => {
          return (
            <View
              key={feed.key}
              style={{ flex: 1, backgroundColor: getColor(index) }}
            >
              <Text>{feed.day}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
