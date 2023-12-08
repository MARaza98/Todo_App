import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home';
const Stack = createStackNavigator();

export default function StackNaigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Todo App" component={HomeScreen} options={{headerStatusBarHeight:10,headerTintColor:'white',headerStyle:{backgroundColor:'#9395D3'}}} />
    </Stack.Navigator>
  )
}

