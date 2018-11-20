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
        {feeds.map((day, index) => {
          return (
            <View
              key={day.date}
              style={{ flex: 1, backgroundColor: getColor(index) }}
            >
              <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                {day.date}
              </Text>
              {day.feeds.map(feed => (
                <Text key={feed.time}>{feed.time}</Text>
              ))}
            </View>
          );
        })}
      </View>
    </>
  );
}
