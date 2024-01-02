import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewScreen from './stackNaigator/stack';
export default function App() {
  return (
    <NavigationContainer>
      <NewScreen />
    </NavigationContainer>
  );
}
