import React, { useState, useEffect } from 'react';
import { FlatList, Button, View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Col, Row, Grid } from "react-native-easy-grid";
import moment from 'moment';
import axios from 'axios';
import { Table, Row as Row2, Rows } from 'react-native-table-component';

const AppointmentScreen = ({route, navigation }) =>
{
  const { username } = route.params;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [datePicked, setDate] = useState("");
  const [timePicked, setTime] = useState("");
  const [details, setDetails] = useState("");
  const [listData, setListData] = useState([]);
  


  useEffect(() => {
    const config = {
        headers:{
          "email": username
        }
      };

    axios.get('http://happy-heart2.herokuapp.com/getLatestAppointments/', config)
    .then(response => {
        setListData(response.data);
        console.log(listData);
        
    })
    .catch(error => {
      console.error(error);
    });

  },[]);

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 16 }}>
        <Text style={styles.renderItem}>{item.date} : {item.time} : {item.details}</Text>
      </View>
    );
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm_date = (date) => {
    
    const formattedDate = moment(date).format('DD-MM-yyyy');
    setDate(formattedDate);

    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm_time = (time) => {
    const formattedTime = moment(time).format('HH:mm');
    setTime(formattedTime);
    hideTimePicker();
  };

  const Submit = async() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "email": username, "date" : datePicked, "time": timePicked, "details": details })
  };
  try {
      await fetch(
          'http://happy-heart2.herokuapp.com/createAppointment/', requestOptions)
          .then(response => response.text())
          .then(function(text){
              setDetails("");
              setDate("");
              setTime("");
              navigation.navigate('HomeScreen', {
                username: username
              });
          })
  }
  catch (error) {
      console.error(error);
  }

  };

  const ImageButton = ({navigation, onPress, source, picked}) => (
    <TouchableOpacity style={styles.imgButton} onPress={onPress}>
      <Image style={styles.image} source={source} />
      <Text style={styles.dt}>{picked}</Text>
    </TouchableOpacity>
  );

  const tableHead = ['Date', 'Time', 'Details'];
  const  tableRows = listData.map(row => [row.date, row.time, row.details]);

  return (
    <View style={styles.container}>
      <Grid style={styles.grid}>
        <Row style="row" size={15} >
        <Col>
          <ImageButton source={require('./Images/setdate.png')} onPress={showDatePicker} picked={datePicked.toString()}></ImageButton>
        </Col>
        <Col>
          <ImageButton source={require('./Images/settime.png')} onPress={showTimePicker} picked={timePicked.toString()}></ImageButton>
        </Col>
        </Row>
        <Row style="row" size={15}>
          <Col size={2}>
          <Text style={styles.upcoming}>Details:</Text>
          <TextInput
            style={styles.input}
            placeholder="Details"
            onChangeText={(text) => setDetails(text)}
            value={details}
          />
          </Col>
          <Col size={1}>
          <TouchableOpacity style={styles.submitButton} onPress={Submit}>
            <Text>Submit</Text>
          </TouchableOpacity>
          </Col>
        </Row>
        <Row size={10}>
          <Col>
          <Text style={styles.upcoming}>Upcoming Appointments:</Text>
          </Col>  
        </Row>
        <Row size={50}>
          <Col>
          {/* <FlatList
            data={listData}
            renderItem={renderItem}
            keyExtractor={(item) => item._date.toString()}
          /> */}
          <Table style={styles.tbl} >
            <Row2 data={tableHead} style={styles.header} textStyle={{ margin: 6 }} />
            <Rows data={tableRows} textStyle={{ margin: 6 }} />
          </Table>
          </Col>
        </Row>
        
        
      </Grid>
      
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm_date}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm_time}
        onCancel={hideTimePicker}
      />
    </View>
  );
}

const styles = {
container: {
  flex: 1,
  width: "100%"
},
grid: {
  marginTop:"20%",
  padding: "2%"
},
imgButton: {
  alignItems: 'center',
  backgroundColor: '#e91e63',
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 20,
  width: 100,
  height: 80,
  marginLeft: "10%"
},
submitButton: {
  alignItems: 'center',
  backgroundColor: '#e91e63',
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 20,
  marginTop: 20,
  width: 100,
  height: 40 
},
image: {
  width: "100%",
  height: "100%",
},
row: {
  justifyContent: 'center',
    alignItems: 'center'
},
dt: {
  marginTop: 15,
  fontSize: 11,
  fontWeight: "bold"
},
upcoming: {
  color: "#e91e63",
  textAlign: "center",
  fontWeight: "bold"
},
renderItem: {
  color: "#e91e63", 
  fontWeight: "bold", 
  textAlign: "center"
},
input: {
  height: 40,
  width: '90%',
  marginLeft: '5%',
  borderColor: 'gray',
  borderWidth: 1,
  marginTop: 8,
  paddingHorizontal: 10,
  textAlign: 'center',
},
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
};
export default AppointmentScreen