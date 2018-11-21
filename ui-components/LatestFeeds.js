import React from "react";
import { Text, View } from "react-native";
import Header from "./Header";

const colors = ["powderblue", "skyblue", "steelblue"];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]; // because react native on android runs old javascriptCore
function getColor(number) {
  return colors[number % colors.length];
}
function extractHours(time) {
  return new Date(time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
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
                {days[new Date(day.date).getDay()]}
              </Text>
              <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                {day.date}
              </Text>
              {day.feeds.map(feed => (
                <Text key={feed.time}>{extractHours(feed.time)}</Text>
              ))}
            </View>
          );
        })}
      </View>
    </>
  );
}
