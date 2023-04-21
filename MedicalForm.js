import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


const MedicalForm = ({navigation}) => {
  const [diastolicPressure, setDiastolicPressure] = useState('');
  const [systolicPressure, setSystolicPressure] = useState('');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [heartRate, setHeartRate] = useState('');

  const handlePress = async() => {
    // Perform login logic here
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "diastolic_pressure": diastolicPressure, 
            "systolic_pressure" : systolicPressure, 
            "weight" : weight, 
            "heart_rate" : heartRate, 
            "date" : date, 
            "email" : "test" 
        })
    };
    try {
        await fetch(
            'http://10.180.246.148:8080/createMedicalDetails/', requestOptions)
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
      <Text style={styles.title}>Enter Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter diastolic pressure"
        onChangeText={setDiastolicPressure}
        value={diastolicPressure}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter systolic pressure"
        onChangeText={setSystolicPressure}
        value={systolicPressure}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Enter weight"
        onChangeText={setWeight}
        value={weight}
      />

      
      <TextInput
        style={styles.input}
        placeholder="Enter heart rate"
        onChangeText={setHeartRate}
        value={heartRate}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter date"
        onChangeText={setDate}
        value={date}
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
  }
});

export default MedicalForm;