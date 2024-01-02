import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppButton from '../component/appButton';
import AppInput from '../component/appInput';

export default function AddTask() {
  let [product, setProduct] = useState();
  let [detail, setDetail] = useState();
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <AppInput
        autoCapitalize="none"
        onChangeText={item => {
          console.log(
            'debug > Product:', item
          )
          setProduct(item)
        }}
        autoCorrect={false}
        placeholder="Product"
      />
      <AppInput
        autoCapitalize="none"
        onChangeText={item => setDetail(item)}
        autoCorrect={false}
        placeholder="Detail"
      />

      <AppButton title="ADD" onPress={() => console.log(product, detail)} />
    </View>
  );
}

const styles = StyleSheet.create({});
