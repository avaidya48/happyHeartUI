import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import { Table, Row, Rows } from 'react-native-table-component';

const MedicalRecords = ({route, navigation }) => {
    const { username } = route.params;
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const config = {
            headers:{
              "email": username
            }
          };

        axios.get('http://happy-heart2.herokuapp.com/getMedicalData/', config)
        .then(response => {
            console.log(response.data);
            setTableData(response.data);
            
        })
        .catch(error => {
          console.error(error);
        });
    
    },[]);
  
    const tableHead = ['Diastolic Pressure', 'Systolic Pressure', 'Heart Rate', 'Weight'];
    const tableRows = tableData.map(row => [row.diastolic_pressure, row.systolic_pressure, row.heart_rate, row.weight]);
  
    return (
      <View>
        <Text style={styles.heading} borderStyle={{width: 1}}>Medical Records</Text>
        <Table style={styles.tbl} >
          <Row data={tableHead} style={styles.header} textStyle={{ margin: 6 }} />
          <Rows data={tableRows} textStyle={{ margin: 6 }} />
        </Table>
      </View>
    );
  };

  const styles = StyleSheet.create({
    tbl: {
        padding: 20,
        border: "1px solid black"
    },
    heading: {
        marginTop: "20%",
        color: "#e91e63",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
      },
    header: {
        backgroundColor: "#F8C8DC",
        color: "#e91e63",
        textAlign: "center"
    }
  })
  export default MedicalRecords