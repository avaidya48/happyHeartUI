import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const styles = {
    app: {
    marginHorizontal: "auto",
    width: "100%",
    padding: "40%",
    paddingBottom: "40%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e91e63',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: "100%",
    width: "100%"
    
  },
  image: {
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    height: "40%"
  },
  "col":  {
    backgroundColor:  "lightblue",
    borderColor:  "#fff",
    borderWidth:  10,
    flex:  1,
    alignItems: "Center"
  },
};

const Col = ({ numRows, children }) => {
    return  (
      <View style={styles[`col`]}>{children}</View>
    )
  }

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )


  const ImageButton = ({navigation, onPress, source}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.image} source={source} />
    </TouchableOpacity>
  );


  const HomeScreen = ({route, navigation }) =>
  {
    const { username } = route.params;

    const onAppintment = () =>{
      navigation.navigate('AppointmentScreen', {
        username: username
      });
    }

    const onMedicalForm = () =>{
      navigation.navigate('MedicalForm', {
        username: username
      });
    }
  
    const onVisScreen = () =>{
      navigation.navigate('VisScreen', {
        username: username
      });
    }

    const onMedicalRecords = () =>{
      navigation.navigate('MedicalRecords', {
        username: username
      });
    }

    return (
        <View style={styles.app}>
        <Row>
          <Col numRows={1}>
          <ImageButton source={require('./Images/appointment_ico.png')} onPress={onAppintment}></ImageButton>
          </Col>
          <Col numRows={1}>
          <ImageButton source={require('./Images/medicaldetails_ico.png')} onPress={onMedicalForm}></ImageButton>
          </Col>
        </Row>
        <Row>
          <Col numRows={1}>
          <ImageButton source={require('./Images/visualization_ico.png')} onPress={onVisScreen}></ImageButton>
          </Col>
          <Col numRows={1}>
          <ImageButton source={require('./Images/list.png')} onPress={onMedicalRecords}></ImageButton>
          </Col>
        </Row>
      </View>
    )
  }

  export default HomeScreen