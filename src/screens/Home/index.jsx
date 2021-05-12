import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SearchIcon from "../../components/atoms/SearchIcon";

const data = [
  {
    id: 1,
    title: "The One Thing",
    author: "by Gary Keller",
    image: require("../../../assets/Livro.png"),
  },
  {
    id: 2,
    title: "HOOKED",
    author: "by Nir Eyal",
    image: require("../../../assets/Livro2.png"),
  },
  {
    id: 3,
    title: "Good to Great",
    author: "by Jim Collins",
    image: require("../../../assets/Livro3.png"),
  },
  {
    id: 4,
    title: "The One Thing",
    author: "by Gary Keller",
    image: require("../../../assets/Livro.png"),
  },
  {
    id: 5,
    title: "HOOKED",
    author: "by Nir Eyal",
    image: require("../../../assets/Livro2.png"),
  },
  {
    id: 6,
    title: "Good to Great",
    author: "by Jim Collins",
    image: require("../../../assets/Livro3.png"),
  },
  {
    id: 7,
    title: "The One Thing",
    author: "by Gary Keller",
    image: require("../../../assets/Livro.png"),
  },
  {
    id: 8,
    title: "HOOKED",
    author: "by Nir Eyal",
    image: require("../../../assets/Livro2.png"),
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <SearchIcon style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search book"
            underlineColorAndroid="transparent"
          />
        </View>

        <Text style={styles.title}>
          Hi, <Text style={styles.subtitle}>Mehmed Al Fatih </Text>{" "}
        </Text>

        <FlatList
          disableVirtualization
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemImage}>
                <Image source={item.image} />
              </View>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemAuthor}>{item.author}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefaf6",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 48,
    paddingRight: 15,
  },
  inputIcon: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    color: "#54565A",
    fontFamily: "SFProText",
    fontSize: 16,
    lineHeight: 18,
  },
  title: {
    fontFamily: "SFProDisplay",
    fontSize: 24,
    paddingVertical: 30,
  },
  subtitle: {
    fontFamily: "SFProDisplay-Bold",
    color: "#ff6a78",
  },
  section: {},
  sectionTitle: {
    fontFamily: "SFProDisplay",
    color: "#3F4043",
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  item: {
    flexGrow: 1,
    marginVertical: 20,

    flexBasis: 0,
  },
  itemImage: {
    width: 105,
    height: 153,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  itemTitle: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 14,
    color: "rgba(49, 49, 49, 0.8)",
  },
  itemAuthor: {
    fontFamily: "SFProDisplay-Bold",
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
    color: "rgba(49, 49, 49, 0.8)",
  },
  text: {
    color: "#333333",
  },
});
