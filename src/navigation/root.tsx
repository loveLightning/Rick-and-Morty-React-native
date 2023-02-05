import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Navigators } from './routes'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
      <Stack.Screen name={Navigators.Main} component={TabBar} />
    </Stack.Navigator>
  )
}
