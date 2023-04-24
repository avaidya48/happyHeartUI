import {React, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Svg, Rect, Axis, G, Line} from 'react-native-svg';
import * as d3 from 'd3';
import { LineChart,BarChart} from "react-native-chart-kit";
import axios from 'axios';


const VisScreen = ({route, navigation }) => {
  const { username } = route.params;
  const [dia_data, setDiaData] = useState([]);
  const [barData, setBarData] = useState(
     {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43]
          }
        ]
      }
  );
  useEffect(() => {
    const config = {
        headers:{
          "username": username
        }
    };

    axios.get('http://happy-heart2.herokuapp.com/getLatestMedicalDetails/', config)
    .then(response => {
        console.log(response.data);
        const diaDetails = [];
        const tempLabels = [];
        for(let i=0;i<response.data.length;i++){
            tempLabels.push(i);
            diaDetails.push(response.data[i].diastolic_pressure)
        }
        var diaBarData = {
            labels: tempLabels,
            datasets: [
              {
                data: diaDetails
              }
            ]
          };
        console.log(diaBarData);
        setBarData(diaBarData);
        
    })
    .catch(error => {
      console.error(error);
    });

},[]);


  const height = 300;
  const width = 300;
  const margin = 40;

  const x = d3
    .scaleBand()
    .domain(dia_data.map((d, i) => i))
    .range([margin, width - margin])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(dia_data)])
    .range([height - margin, margin]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visualization</Text>
        <Text>Diastolic Pressure</Text>
        <BarChart
            style={styles.graphStyle}
            data={barData}
            width={350}
            height={350}
            chartConfig={styles.chartConfig}
            verticalLabelRotation={0}
        />
        
        
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
    scrollable: 'true'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "#fe2c54"
  },
  graphStyle :{
    margin: "2%",
    borderRadius: 10
  },
  chartConfig : {
    backgroundGradientFrom: "#fe2c54",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#fe2c54",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    fillShadowGradientFromOpacity: "0.6",
    fillShadowGradientTo: "0.2"
  }
});

export default VisScreen;
