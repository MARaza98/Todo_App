import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNaigator from '../stackNaigator';
import SettingsScreen from '../screen/complete';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={StackNaigator} options={{headerShown: false, tabBarIcon: () => <MaterialCommunityIcons name="order-bool-ascending" size={20} /> }} />
      <Tab.Screen name="Completed" component={SettingsScreen} options={{ tabBarIcon: () => <MaterialCommunityIcons name="check-underline" size={20} /> }} />
    </Tab.Navigator>
  );
}