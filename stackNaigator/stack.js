import React from 'react'
import { StyleSheet } from 'react-native'
import AddTask from '../screen/add_task';
import MyTabs from '../bottomNavigator';
// import SettingsScreen from '../screen/complete';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const NewScreen = () => {
    return (
        <Stack.Navigator >

            <Stack.Screen
                name="TODO APP"
                component={MyTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Add Task"
                component={AddTask}
                options={styles.headershow}
            />
            <Stack.Screen
                name="Completed"
                component={MyTabs}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default NewScreen

const styles = StyleSheet.create({
    headershow: {
        headerStatusBarHeight: 10,
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#9395D3',
        },
    },
})