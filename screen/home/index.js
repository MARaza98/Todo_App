import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  let navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Text>im home</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: 30,
        }}>
        <Text
          style={styles.cricle}
          onPress={() => navigation.navigate('Add Task',upDate = date =>{
            console.log(date)
          })}>
          <MaterialCommunityIcons name="plus-thick" size={25} color="white" />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cricle: {
    backgroundColor: '#9395D3',
    padding: 20,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
