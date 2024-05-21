import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider'
import styles from './src/stylesheets/base_stylesheet.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/logo.png')}
          style={styles.logo}>

      </Image>
      <Text style={styles.tittle}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider style={styles.slider}
          maximumValue={20}
          minimumValue={6}
          maximumTrackTintColor="#00ffff"
          minimumTrackTintColor="#000"
          thumbTintColor='#5340ff'></Slider>


      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

    </View>
  )
}
