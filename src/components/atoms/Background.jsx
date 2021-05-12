import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Background({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefaf6",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
