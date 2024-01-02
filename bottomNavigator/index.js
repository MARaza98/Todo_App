import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNaigator from '../stackNaigator';
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
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="order-bool-ascending" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Check"
        component={StackNaigator}
        options={{
          headerStatusBarHeight: 10,
          headerShown: false,
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

