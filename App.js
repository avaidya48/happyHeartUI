import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import MedicalForm from './MedicalForm';
import RegisterScreen from './RegisterScreen';
import LandingScreen from './LandingScreen';
import HomeScreen from './HomeScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="LandingScreen">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MedicalForm" component={MedicalForm} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
