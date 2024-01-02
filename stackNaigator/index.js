import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screen/complete';
import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

export default function StackNaigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Completed"
        component={SettingsScreen}
        options={styles.headershow}
      />

    </Stack.Navigator>

  );
}



const styles = StyleSheet.create({
  headershow: {
    headerStatusBarHeight: 10,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#9395D3',
    },
  },
});


