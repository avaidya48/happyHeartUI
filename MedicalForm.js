import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';


const MedicalForm = ({ route, navigation }) => {
  const { username } = route.params;
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [weight, setWeight] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handlePress = async() => {
    // Perform login logic here

    const date = moment.now();
    const formattedDate = moment(date).format('DD-MM-yyyy');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "diastolic_pressure": diastolicPressure, 
            "systolic_pressure" : systolicPressure, 
            "weight" : weight, 
            "heart_rate" : heartRate, 
            "date" : formattedDate, 
            "email" : username
        })
    };
    try {
        await fetch(
            'http://happy-heart2.herokuapp.com/createMedicalDetails/', requestOptions)
            .then(response => response.text())
            .then(function(text){
                console.log(text);
                navigation.navigate('HomeScreen', {
                  username: username
                });
            })
    }
    catch (error) {
        console.error(error);
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Data</Text>
      <Text>Enter diastolic pressure:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter diastolic pressure"
        keyboardType='numeric'
        onChangeText={setDiastolicPressure}
        value={diastolicPressure}
      />
      
      <Text>Enter systolic pressure:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter systolic pressure"
        keyboardType='numeric'
        onChangeText={setSystolicPressure}
        value={systolicPressure}
      />


      <Text>Enter heart rate:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter heart rate"
        keyboardType='numeric'
        onChangeText={setHeartRate}
        value={heartRate}
      />

      <Text>Enter weight:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter weight"
        keyboardType='numeric'
        onChangeText={setWeight}
        value={weight}
      />

      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
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
    height: 30,
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
  }
});

export default MedicalForm;