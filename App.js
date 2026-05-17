import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AddTransactionScreen from "./screens/AddTransactionScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
      />

      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
      />

      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <Stack.Screen
  name="AddTransaction"
  component={AddTransactionScreen}
/>
<Stack.Screen
  name="Transactions"
  component={TransactionsScreen}
/>
<Stack.Screen
  name="Analytics"
  component={AnalyticsScreen}
/>
<Stack.Screen
  name="Settings"
  component={SettingsScreen}
/>
    </Stack.Navigator>
    
  );
}