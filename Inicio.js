import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// la importacion de lo que usemos

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // declaracion de variables
    };
  }

  render() {
    //las acciones de los objetos
    const clickemail=()=>{
      console.log("LE DISTE CLICK AL BOTON DE EMAIL");
    }

    const clickfacebook=()=>{
      console.log("LE DISTE CLICK AL BOTON DE FACEBOOK");
    }

    const ir_a_insc = () =>{
      this.props.navigation.navigate("Inscripcion");
    }
    return (
        
      <View style={styles.fondo}>
         <Image
        style={styles.imagen1}
        source={require("./Imagenes/trabajador.png")}
      />
        <View style={styles.login}>
        <Text style={styles.txtHandyman}>Welcome to handyman</Text>
        <TouchableOpacity style={styles.boton1} onPress={clickemail}>
          <View style={styles.btnemail}>
          <Image
          style={styles.iconoemail}
          source={require("./Imagenes/email.png")}
          />
          <Text style={styles.txtemail}>Sign in with Email</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.boton2} onPress={ir_a_insc}>
        <View style={styles.btnfacebook}>
        <Image
          style={styles.iconofacebook}
          source={require("./Imagenes/facebook.png")}
          />
        <Text style={styles.txtfacebook}>Sign in Facebook</Text>
        </View>
        </TouchableOpacity>

        </View>
      </View>
    );
  }
}

//Seleccion de styles
const styles = StyleSheet.create({
txtemail:{
  fontSize:20,
  textAlign:'center',
  marginTop:10,
  color:"white",
},

txtfacebook:{
  fontSize:20,
  textAlign:'center',
  marginTop:10,
  marginLeft:10,
  color:"black",
},

  boton1:{
    width:250,
    height:50,
    marginLeft:80,
    marginTop:30,
  },
  
  boton2:{
    width:250,
    height:50,
    marginLeft:80,
    marginTop:30,
  },

    login:{
        width:395,
        height:275,
        borderWidth:2,
        borderColor:"#E58835",
        backgroundColor:"#E58835",
        borderRadius:30,
        marginLeft:7,
    },

    btnemail:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor:"#0000FF",
        backgroundColor:"#0000FF",
        borderRadius:40,
        flexDirection:"row",
    },


    btnfacebook:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:40,
        flexDirection:"row",
    },

    txtHandyman:{
        fontSize:20,
        textAlign:'center',
        marginTop:20,
        color:"white",

    },

    imagen1:{
        width:400,
        height:520,
    }

})