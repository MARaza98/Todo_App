import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  return (
    <View style={{flex:1}}>
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center'}}>
      <Text>im home</Text>
      </View>
      <View style={{flex:1,justifyContent: 'center', alignItems: 'flex-end', marginRight: 30,}}>
        <Text style={{backgroundColor: '#9395D3', padding: 20 , borderRadius: 50}}>
          <MaterialCommunityIcons name="plus-thick" size={25} color='white' />
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})