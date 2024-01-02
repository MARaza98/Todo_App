import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screen/complete';
import HomeScreen from '../screen/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All"
        component={HomeScreen}
        options={{
          headerStatusBarHeight: 10,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#9395D3' },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="order-bool-ascending" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Completed"
        component={SettingsScreen}
        options={{
          headerStatusBarHeight: 10,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#9395D3' },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="check-underline" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

