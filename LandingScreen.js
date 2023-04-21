import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LandingScreen = ({ navigation }) => {

    const handleLogin = () =>{
        navigation.navigate('LoginScreen');
    }
    const handleRegister = () =>{
        navigation.navigate('RegisterScreen');
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Heart</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    color: "#fe2c54",
    fontSize: 50
  },
  button: {
    backgroundColor: '#fe2c54',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LandingScreen;
