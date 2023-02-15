import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Navigators, Stacks } from './routes'
import { CharactersStack, EpisodesStack, LocationsStack } from './stacks'
import { TabBar } from './tabbar'

const Stack = createNativeStackNavigator()

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Navigators.Main}>
      <Stack.Screen name={Navigators.Main} component={TabBar} />

      <Stack.Screen
        name={Stacks.Characters}
        component={CharactersStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Stacks.Locations}
        component={LocationsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Stacks.Episodes}
        component={EpisodesStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
