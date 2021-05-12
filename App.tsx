import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import BookForm from "./src/screens/BookForm";

export default function App() {
  const Tab = createBottomTabNavigator();

  const [loadedFonts, setLoadedFonts] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        SFProDisplay: require("./assets/fonts/SFProDisplay-Regular.ttf"),
        "SFProDisplay-SemiBold": {
          uri: require("./assets/fonts/SFProDisplay-Semibold.ttf"),
          display: Font.FontDisplay.FALLBACK,
        },
        "SFProDisplay-Bold": {
          uri: require("./assets/fonts/SFProDisplay-Bold.ttf"),
          display: Font.FontDisplay.FALLBACK,
        },
        SFProText: {
          uri: require("./assets/fonts/SFProText.ttf"),
          display: Font.FontDisplay.FALLBACK,
        },
      });

      setLoadedFonts(true);
    }

    loadFonts();
  }, []);

  return loadedFonts ? (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#313131",
          inactiveTintColor: "#BFBEBF",
          labelStyle: {
            fontFamily: "SFProDisplay",
            fontWeight: "400",
            fontSize: 10,
            marginTop: -10,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={25}
                color={focused ? "#000000" : "#BFBEBF"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add Book"
          component={BookForm}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <MaterialCommunityIcons
                name="plus"
                size={30}
                color={focused ? "#000000" : "#BFBEBF"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="md-person-outline"
                size={25}
                color={focused ? "#000000" : "#BFBEBF"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <></>
  );
}
