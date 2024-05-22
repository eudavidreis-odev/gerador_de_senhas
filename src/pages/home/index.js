import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View ,Image, Button, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider'
import styles from '../../stylesheets/base_stylesheet.js'
import functions from '../../scripts/base_functions.js'
import {ModalPassword} from '../../components/modal/ModalSenhaGerada.js'

export function Home() {
  
    const [size, setSize] = useState(10)
    const [passwordValue, setPasswordValue] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

        function generatePassword(){
        let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" 

        let password = ""

        for(let i=0, n = charSet.length;i<size; i++){
            password += charSet.charAt(Math.floor(Math.random() * n))
        }
        console.log(password)
        setPasswordValue(password)
        setModalVisible(true)
    }
    return (
        <View style={styles.container}>
        <Image source={require('../../assets/logo.png')}
            style={styles.logo}>

        </Image>
        <Text style={styles.tittle}>{size} caracteres</Text>

        <View style={styles.area}>
            <Slider style={styles.slider}
            maximumValue={20}
            minimumValue={6}
            maximumTrackTintColor="#00ffff"
            minimumTrackTintColor="#000"
            thumbTintColor='#5340ff'
            value={size}
            onValueChange={(value)=> setSize(value.toFixed(0))}></Slider>
        </View>
        <TouchableOpacity style={styles.button} onPress={generatePassword}>
            <Text style={styles.buttonText}>Gerar senha</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType="fade" transparent={true}>
            <ModalPassword password={passwordValue} handleClose={()=>{setModalVisible(false)}} />
        </Modal>

        </View>
    )
}
