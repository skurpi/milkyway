import React from "react";
import { Text } from "react-native";

export default function Title({ children }) {
  return <Text style={{ fontSize: 30 }}>{children}</Text>;
}
