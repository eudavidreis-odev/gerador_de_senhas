import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3F3FF',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo:{
      marginBottom: 60
    },
    tittle:{
        fontSize:30,
        fontWeight: 'bold',
    },
    area:{
      marginTop:14,
      marginBottom:14,
      width: '80%',
      alignItems:'center'
  
    },
    slider:{
      width:'90%',
      height: 50,

      backgroundColor:"#fff",
      borderRadius:8,
      padding:10,
      marginTop:10,
      marginBottom:10
    },
    button:{
        backgroundColor: '#392de9',
        width: '80%',
        height: 50,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
  });


  export default styles;