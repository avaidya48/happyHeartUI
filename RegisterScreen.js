import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async() => {
    // Perform login logic here
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "email": username, 
            "password" : password, 
            "firstName" : firstname, 
            "lastName" : lastname, 
            "gender" : gender, 
            "birthdate" : birthdate 
        })
    };
    try {
        await fetch(
            'http://happy-heart2.herokuapp.com/register/', requestOptions)
            .then(response => response.text())
            .then(function(text){
                console.log(text);
                navigation.navigate('LoginScreen');
            })
    }
    catch (error) {
        console.error(error);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Text>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFirstname(text)}
        value={firstname}
        secureTextEntry={false}
      />
      <Text>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastname(text)}
        value={lastname}
        secureTextEntry={false}
      />
      <Text>Gender</Text>
      <TextInput
        style={styles.input}
        placeholder="Gender"
        onChangeText={(text) => setGender(text)}
        value={gender}
        secureTextEntry={false}
      />
      <Text>Birthdate</Text>
      <TextInput
        style={styles.input}
        placeholder="Birthdate"
        onChangeText={(text) => setBirthdate(text)}
        value={birthdate}
        secureTextEntry={false}
      />
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#fe2c54"
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 10,
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

export default RegisterScreen;
