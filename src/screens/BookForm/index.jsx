import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Background from "../../components/atoms/Background";

export default function BookForm() {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Add a new book</Text>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Author</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            editable
            multiline
            numberOfLines={10}
          />
        </View>

        <TouchableOpacity style={styles.button} hitSlop={0.8}>
          <Text style={styles.buttonText}>Add new book</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 38,
    fontSize: 24,
    lineHeight: 29,
    color: "#FF6978",
    fontFamily: "SFProDisplay-SemiBold",
  },
  fieldContainer: {
    marginBottom: 38,
  },
  label: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: "SFProText",
    color: "#000",
  },
  input: {
    backgroundColor: "#FDFCFC",
    minHeight: 48,
    borderRadius: 10,
    marginTop: 10,
  },
  textArea: {
    marginTop: 10,
    backgroundColor: "#FDFCFC",
    borderRadius: 10,
  },

  button: {
    width: 336,
    backgroundColor: "#FF6978",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 29,
    fontFamily: "SFProDisplay-SemiBold",
  },
});
