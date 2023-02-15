import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  CharacterDetailScreen,
  CharacterFiltersScreen,
  CharactersScreen,
} from 'src/screens'

import { Screens } from '../routes'

const Character = createNativeStackNavigator()

export const CharactersStack = () => {
  return (
    <Character.Navigator initialRouteName={Screens.Characters}>
      <Character.Screen
        name={Screens.Characters}
        options={{ headerShown: true }}
        component={CharactersScreen}
      />
      <Character.Screen
        name={Screens.CharacterDetail}
        options={{ headerShown: true }}
        component={CharacterDetailScreen}
      />
      <Character.Screen
        name={Screens.CharacterFilters}
        options={{ headerShown: true }}
        component={CharacterFiltersScreen}
      />
    </Character.Navigator>
  )
}
