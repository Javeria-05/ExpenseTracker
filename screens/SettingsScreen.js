import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { Colors } from "../constants/theme";

export default function SettingsScreen({
  navigation
}) {

  // Clear all local data
  const clearData = async () => {

    await AsyncStorage.removeItem(
      "transactions"
    );

    Alert.alert(
      "Success",
      "All transactions deleted."
    );
  };

  // Firebase logout
  const handleLogout = () => {

    signOut(auth)
      .then(() => {

        navigation.replace(
          "Login"
        );

      })
      .catch(() => {

        Alert.alert(
          "Error",
          "Logout failed."
        );

      });
  };

  return (
    <ScrollView style={styles.container}>

      {/* Heading */}
      <Text style={styles.heading}>
        Settings
      </Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>

        <Text style={styles.name}>
          Expense Tracker
        </Text>

        <Text style={styles.email}>
          Manage your wallet
        </Text>

      </View>

      {/* Settings Options */}
      <TouchableOpacity
        style={styles.option}
      >
        <Text>
          Budget Settings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
      >
        <Text>
          Notifications
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
      >
        <Text>
          About Application
        </Text>
      </TouchableOpacity>

      {/* Clear Data */}
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={clearData}
      >
        <Text style={styles.deleteText}>
          Clear All Data
        </Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:
      Colors.light.background,
    padding:20
  },

  heading:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:25
  },

  profileCard:{
    backgroundColor:
      Colors.light.dark,
    borderRadius:25,
    padding:25,
    marginBottom:25
  },

  name:{
    color:"white",
    fontSize:22,
    fontWeight:"bold"
  },

  email:{
    color:"#ccc",
    marginTop:8
  },

  option:{
    backgroundColor:"white",
    padding:20,
    borderRadius:18,
    marginBottom:12
  },

  deleteBtn:{
    backgroundColor:
      Colors.light.danger,
    padding:18,
    borderRadius:18,
    marginTop:20
  },

  deleteText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  },

  logoutBtn:{
    backgroundColor:
      Colors.light.primary,
    padding:18,
    borderRadius:18,
    marginTop:12
  },

  logoutText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  }

});