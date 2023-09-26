import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Image } from 'react-native';

export default class Inscripcion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        modalVentana:true,
        nombre:"",
        correo:"",
        password:"",
    };
    
  }
   
  render() {
    const correo = () => {
        this.setState({modalCorreo:true});
    }
    const cierra1 = () => {
        this.setState({modalCorreo:false});
        console.log("se dio clic");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            console.log("respuesta = "+xhttp.responseText);
            }else{
                if(this.readyState != 4)
                    
                    console.log("Error al conectar readyState, readyState="+this.readyState);
                if(this.status != 200)
                    console.log("Error al conectar status, status="+this.status);
            }
        };
        console.log("https://proyecto3286547.000webhostapp.com/2023B/datos.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password)
        xhttp.open("GET", "https://proyecto3286547.000webhostapp.com/2023B/datos.php?nombre="+this.state.nombre+"&correo="+this.state.correo+"&password="+this.state.password, true);
        xhttp.send();
    }
    const facebook = () => {
        this.setState({modalFacebook:false});
    }
    const cierra2 = ()=> {
        this.setState({modalFacebook:false})
        
    }
    return (
        <View style={{
            backgroundColor:"#F5B486",
            width:370,
            height:732,
            marginLeft:10,
            marginTop:10,
            borderRadius:5,
            shadowColor:"#171717",
            shadowOpacity:1,
            elevation:5,
            shadowRadius:4,
            shadowOffset:{width: -2, heigh:4},
        }}>
            <Text style={{
                fontSize: 50,
                textAlign: "center",
                marginTop: 10,
                color: "#black",
              }}>Inscribirse</Text>
        <View>
        <TouchableOpacity style={{
            //borderWidth:2,
            width:260,
            height:50,
            backgroundColor:"#717171",
            borderRadius:40,
            marginLeft:50,
            marginTop:30,
        }} onPress={correo}>
            <Text style={{
            fontSize:16,
            textAlign:"center",
            marginTop:12,
            fontFamily:"serif",
            color:"white",
            marginLeft:40,

        }} >Inscribirse por correo</Text>
            <Image
            style={{
                width:30,
                height:30,
                marginTop:-22,
                marginLeft:15,
        }}
        source={require("./Imagenes/email.png")}
        />
            </TouchableOpacity>
            <View style={{
            width:260,
            height:50,
            //borderWidth:3,
            marginLeft:50,
            marginTop:40,
            borderRadius:40,
        }}>
        <TouchableOpacity style={{
            //--borderWidth:2,
            width:260,
            height:50,
            backgroundColor:"#515151",
            borderRadius:40,
        }} onPress={facebook}>
        <Text style={{
            fontSize:15,
            textAlign:"center",
            marginTop:12,
            color:"white",
            fontFamily:"serif",
            marginLeft:40,
        
        }}>Inscribirse por Facebook</Text>
            <Image
            style={{
                width:30,
                height:30,
                marginTop:-22,
                marginLeft:15,
        }}source={require("./Imagenes/facebook.png")}
        />
        </TouchableOpacity>
        </View>
        
        <Modal
        transparent={true}
        visible={this.state.modalCorreo}
        animationType="fade"
        >
        <View style={{
            borderWidth:1,
            width:300,
            height:300,
            marginLeft:40,
            marginTop:220,
            backgroundColor:"#717171",
            borderRadius:10,
        }}>
            <Text style={{
                fontSize:18,
                marginLeft:22,
                marginTop:10,
                color:"white",

            }}>*Name</Text>
            <TextInput onChangeText={nombre => this.setState({nombre})}
            style={{
                borderWidth:1,
                borderRadius:5,
                width:240,
                height:40,
                marginLeft:20,
                backgroundColor:"white",
                
            }}></TextInput>

            <Text style={{
                fontSize:18,
                marginLeft:22,
                color:"white",

            }}>*Email</Text>
            <TextInput onChangeText={correo => this.setState({correo})}
             style={{
                borderWidth:1,
                borderRadius:5,
                width:240,
                height:40,
                marginLeft:20,
                backgroundColor:"white",
            }}></TextInput>
            <Text style={{
                fontSize:18,
                marginLeft:22,
                color:"white",

            }}>*Password</Text>
            <TextInput onChangeText={password => this.setState({password})}
            style={{
                borderWidth:1,
                borderRadius:5,
                width:240,
                height:40,
                marginLeft:20,
                backgroundColor:"white",
                
            }} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={{
                    borderWidth:1,
                    width:130,
                    height:50,
                    marginLeft:80,
                    borderRadius:40,
                    fontSize:20,
                    backgroundColor:"#E58835",
                    marginTop:20,
                }} onPress={cierra1}>
                <Text style={{
                    textAlign:'center',
                    marginTop:6,
                    fontFamily:"fantasy",
                    fontSize:22,
                    color:"black",
                }} >Aceptar</Text>
            </TouchableOpacity>
        </View>
   </Modal>

   <Modal
    transparent={true}
    visible={this.state.modalFacebook}
    animationType="fade"
    >
        <View style={{
            borderWidth:1,
            width:300,
            height:220,
            marginLeft:40,
            marginTop:220,
            backgroundColor:"#717171",
            borderRadius:10,
        }}>
            <Text style={{
                fontSize:18,
                marginLeft:22,
                color:"white",

            }}>*Email</Text>
            <TextInput style={{
                borderWidth:1,
                borderRadius:5,
                width:240,
                height:40,
                marginLeft:20,
                backgroundColor:"white",
                
            }}></TextInput>

            <Text style={{
                fontSize:18,
                marginLeft:22,
                color:"white",

            }}>*Password</Text>
            <TextInput style={{
                borderWidth:1,
                borderRadius:5,
                width:240,
                height:40,
                marginLeft:20,
                backgroundColor:"white",
                
            }} secureTextEntry={true}></TextInput>
            <TouchableOpacity style={{
                    borderWidth:1,
                    width:130,
                    height:50,
                    marginLeft:80,
                    borderRadius:40,
                    fontSize:20,
                    backgroundColor:"#E58835",
                    marginTop:20,
                }} onPress={cierra2}>
                <Text style={{
                    textAlign:'center',
                    marginTop:6,
                    fontFamily:"fantasy",
                    fontSize:22,
                    color:"black",
                }} >Aceptar</Text>
            </TouchableOpacity>
        </View>
        </Modal>
    </View>
    </View>
    );
  }
}