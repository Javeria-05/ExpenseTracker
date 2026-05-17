import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { Colors } from "../constants/theme";

export default function LoginScreen({
  navigation
}) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {

        navigation.replace(
          "Home"
        );

      })
      .catch(error => {

        Alert.alert(
          "Login Failed",
          error.message
        );

      });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Text style={styles.subtitle}>
        Login to your wallet
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "Signup"
          )
        }
      >
        <Text style={styles.signup}>
          Create Account
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles =
  StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:25,
    backgroundColor:
      Colors.light.background
  },

  title:{
    fontSize:32,
    fontWeight:"bold"
  },

  subtitle:{
    color:"#666",
    marginBottom:30
  },

  input:{
    backgroundColor:"white",
    padding:18,
    borderRadius:15,
    marginBottom:15
  },

  loginBtn:{
    backgroundColor:
      Colors.light.primary,
    padding:18,
    borderRadius:15
  },

  loginText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  },

  signup:{
    textAlign:"center",
    marginTop:20,
    color:
      Colors.light.primary
  }

});