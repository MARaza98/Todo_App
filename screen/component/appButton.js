import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function AppButton({title,onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9395D3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 30,
    marginLeft: 5,
    width: '98%',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
