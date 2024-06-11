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
    },
    modalContainer:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    modalContent:{
        backgroundColor:"#fff",
        width:"90%",
        borderRadius:8,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    modalTittle:{
        fontSize: 24,
        fontWeight: "bold",
        color:"#000"
    },
    innerPassword:{
        backgroundColor:"#000",
        width:"90%",
        borderRadius:8,
        padding:10,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    modalPasswordText:{
        color:"#fff",
        fontSize:16,
        textAlign:"center"
    },
    modalButtonsArea:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"95%",
        padding:24
    },
    modalButtonTextDark:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold",
        backgroundColor:'#392de9',
        padding:10,
        borderRadius:8
    },
    modalButtonTextLight:{
        color:"#000",
        fontSize:16,
        fontWeight:"bold",
        padding:10,
        borderRadius:8
    },
    passwordsHeader:{
        backgroundColor: "#392de9",
        paddingTop:58,
        paddingBottom:14,
        paddingStart:14,
        paddingEnd:14
    },
    passwordsTittle:{
        fontSize:18,
        color:"#fff",
        fontWeight: 'bold'
    },
    passwordsContent:{
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14
    },
    containerItemPassword: {
        flex: 1,
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: "100%",
        marginBottom:14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    passwordTextItem:{
        color: '#FFF'
    }

    
  });


  export default styles;