import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import INICIO from "./Inicio";
import INSCRIPCION from "./Inscripcion";

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={INICIO} />
          <Stack.Screen name="Inscripcion" component={INSCRIPCION} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
