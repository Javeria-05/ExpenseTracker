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
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { Colors } from "../constants/theme";

export default function SignupScreen({
  navigation
}) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = () => {

    createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {

        Alert.alert(
          "Success",
          "Account created successfully."
        );

        navigation.navigate(
          "Login"
        );

      })
      .catch(error => {

        Alert.alert(
          "Signup Failed",
          error.message
        );

      });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Start managing your expenses
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
        style={styles.signupBtn}
        onPress={handleSignup}
      >
        <Text style={styles.signupText}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "Login"
          )
        }
      >
        <Text style={styles.loginLink}>
          Already have an account?
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

  signupBtn:{
    backgroundColor:
      Colors.light.dark,
    padding:18,
    borderRadius:15
  },

  signupText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  },

  loginLink:{
    textAlign:"center",
    marginTop:20,
    color:
      Colors.light.primary
  }

});