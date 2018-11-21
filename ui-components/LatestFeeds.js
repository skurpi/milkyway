import React from "react";
import { Text, View, StyleSheet } from "react-native";
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
  return new Date(time)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
    .split(/(\d{2}:\d{2})/)[1];
}

export default function LatestFeeds({ feeds = [] }) {
  return (
    <>
      <Header>Latest feeds</Header>
      <View style={{ flex: 3, flexDirection: "row" }}>
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
                <React.Fragment key={feed.time}>
                  <Text style={{ marginLeft: 10 }}>
                    {extractHours(feed.time)}
                  </Text>
                  {feed.notes && (
                    <Text style={{ marginLeft: 20, fontStyle: "italic" }}>
                      - {feed.notes}
                    </Text>
                  )}
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: StyleSheet.hairlineWidth
                    }}
                  />
                </React.Fragment>
              ))}
            </View>
          );
        })}
      </View>
    </>
  );
}
