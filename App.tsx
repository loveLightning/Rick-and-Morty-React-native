import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Character } from './src/components/Character'

type RootStackParamList = {
  Character: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Character">
        <RootStack.Screen name="Character" component={Character} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
};


export default App;




