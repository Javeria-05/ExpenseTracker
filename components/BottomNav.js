import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import {
  Ionicons
} from "@expo/vector-icons";

import { Colors } from "../constants/theme";

export default function BottomNav({
  navigation
}) {

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home")
        }
      >
        <Ionicons
          name="home"
          size={26}
          color={Colors.light.primary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "AddTransaction"
          )
        }
      >
        <Ionicons
          name="add-circle"
          size={26}
          color={Colors.light.primary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "Analytics"
          )
        }
      >
        <Ionicons
          name="stats-chart"
          size={26}
          color={Colors.light.primary}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "Settings"
          )
        }
      >
        <Ionicons
          name="settings"
          size={26}
          color={Colors.light.primary}
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"white",
    padding:18,
    borderRadius:25,
    marginTop:20
  }

});