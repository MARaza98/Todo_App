import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function AppInput({...otherProps}) {
  return (
    <View>
      <TextInput maxLength={15} style={styles.input} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
