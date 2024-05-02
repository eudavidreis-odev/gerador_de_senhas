import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')}
          style={styles.logo}>

      </Image>
      <Text style={styles.tittle}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider style={styles.slider}></Slider>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60
  },
  tittle:{

  },
  area:{
    marginTop:14,
    marginBottom:14,
    width: '80%',
    alignItems:'center'

  },
  slider:{
    width:'80%',
    height: 50,
    minimumValue: 6,
    maximumValue:20,
    backgroundColor:"#fff"
  }
});
