import React from "react";
import { Text } from "react-native";

export default function Header({ children }) {
  return <Text style={{ fontSize: 20 }}>{children}</Text>;
}
