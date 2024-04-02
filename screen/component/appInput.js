import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState , useEffect} from 'react';

export default function AppInput({ ...otherProps }) {
  const [text, setText] = useState("");

  useEffect(() => {
    //Runs on every render

    if (text.includes('')) {
      setText(text)
    }
  },);

  return (
    <View>
      <TextInput value={text} maxLength={15} style={styles.input} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});


